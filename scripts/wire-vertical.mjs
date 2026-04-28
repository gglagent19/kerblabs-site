// Wire-up helper for adding a new industry vertical to kerblabs.com.
// Usage:  node scripts/wire-vertical.mjs <industrySlug> <comboPrefix> <hubFilename> <emoji-fallback-not-used>
// Example: node scripts/wire-vertical.mjs solicitors solicitor-marketing solicitors
//
// Mutates 4 files in-place (idempotent — safe to re-run):
//   1. lib/seo-data.ts                       — appends hub import + industries[] entry +
//                                                comboIndustrySlugs entry + getIndustryByComboSlug map entry
//   2. lib/rich-content/index.ts             — appends 25 combo imports + 25 COMBO_CONTENT entries
//   3. components/seo/ComboPage.tsx          — appends comboToIndustry + COMBO_TITLES entries
//   4. app/industries/[slug]/page.tsx        — appends industryToCombo entry
// Also creates the app route at app/{comboPrefix}/[slug]/page.tsx if missing.
//
// Run a dry-check with NODE_DRY=1 to print what it would change.

import fs from "node:fs";
import path from "node:path";

const [, , industrySlug, comboPrefix, hubFilename] = process.argv;
if (!industrySlug || !comboPrefix || !hubFilename) {
  console.error("usage: node scripts/wire-vertical.mjs <industrySlug> <comboPrefix> <hubFilename>");
  process.exit(1);
}

const CITIES = [
  "aberdeen", "belfast", "birmingham", "bradford", "bristol", "cardiff", "coventry",
  "derby", "edinburgh", "glasgow", "leeds", "leicester", "liverpool", "london",
  "manchester", "newcastle", "nottingham", "plymouth", "reading", "sheffield",
  "southampton", "stoke-on-trent", "sunderland", "swansea", "wolverhampton",
];

const v = (s) => s.replace(/-/g, "_");
const dry = process.env.NODE_DRY === "1";

function patch(file, transform) {
  const before = fs.readFileSync(file, "utf8");
  const after = transform(before);
  if (before === after) {
    console.log(`  unchanged: ${file}`);
    return;
  }
  if (dry) {
    console.log(`  WOULD PATCH: ${file}`);
    return;
  }
  fs.writeFileSync(file, after);
  console.log(`  patched: ${file}`);
}

// 1) lib/seo-data.ts
patch("lib/seo-data.ts", (s) => {
  const hubVar = v(hubFilename) + "Hub";
  const importLine = `import { industry as ${hubVar} } from "./rich-content/industries/${hubFilename}";\n`;

  if (!s.includes(importLine)) {
    // Insert after the LAST existing 'import { industry as ' line (or after type import if first)
    const lastHubImport = s.lastIndexOf("from \"./rich-content/industries/");
    if (lastHubImport === -1) {
      // first hub import — insert after the section header
      s = s.replace(
        "// /[industry-slug]/[location-slug]\n\n",
        "// /[industry-slug]/[location-slug]\n\n" + importLine
      );
    } else {
      const lineEnd = s.indexOf("\n", lastHubImport) + 1;
      s = s.slice(0, lineEnd) + importLine + s.slice(lineEnd);
    }
  }

  // industries[] array — append before the closing '];' that follows it.
  // Match the LAST `Hub,` line followed by `];` so each new vertical appends to
  // the actual array tail, not anchored to a single hub name.
  if (!s.includes(`  ${hubVar},\n`)) {
    s = s.replace(
      /(\n  [a-zA-Z_]+Hub,\n)(\];)/,
      (_m, last, close) => `${last}  ${hubVar},\n${close}`
    );
  }

  // comboIndustrySlugs — append entry before closing ']'
  const comboSlug = `"${comboPrefix}"`;
  if (!s.includes(comboSlug + " as const") && !new RegExp(`comboIndustrySlugs[\\s\\S]*?${comboSlug}`).test(s)) {
    s = s.replace(
      /(export const comboIndustrySlugs = \[[\s\S]*?)(\n\] as const;)/,
      `$1\n  ${comboSlug},$2`
    );
  }

  // getIndustryByComboSlug map — append before closing '};'
  const mapEntry = `    "${comboPrefix}": "${industrySlug}",`;
  if (!s.includes(mapEntry)) {
    s = s.replace(
      /(  const map: Record<ComboIndustrySlug, string> = \{[\s\S]*?)(\n  \};)/,
      `$1\n${mapEntry}$2`
    );
  }

  return s;
});

// 2) lib/rich-content/index.ts — append 25 combo imports + entries
patch("lib/rich-content/index.ts", (s) => {
  let importsBlock = "";
  let entriesBlock = "";
  for (const c of CITIES) {
    const varname = `${v(comboPrefix)}_${v(c)}`;
    const importLine = `import { content as ${varname} } from "./combos/${comboPrefix}-${c}";\n`;
    const entryLine = `  "${comboPrefix}:${c}": ${varname},\n`;
    if (!s.includes(importLine)) importsBlock += importLine;
    if (!s.includes(entryLine)) entriesBlock += entryLine;
  }
  if (importsBlock) {
    // Insert imports right before 'const COMBO_CONTENT'
    s = s.replace(
      "const COMBO_CONTENT: Record<string, RichComboContent>",
      importsBlock + "const COMBO_CONTENT: Record<string, RichComboContent>"
    );
  }
  if (entriesBlock) {
    // Insert entries right before the closing '};' of COMBO_CONTENT
    s = s.replace(
      /(  "salon-marketing:wolverhampton": salon_marketing_wolverhampton,\n)([\s\S]*?\n)\};/,
      `$1$2${entriesBlock}};`
    );
    // The above regex captures everything up to the closing brace and re-inserts before it
  }
  return s;
});

// 3) components/seo/ComboPage.tsx — append comboToIndustry + COMBO_TITLES entries
patch("components/seo/ComboPage.tsx", (s) => {
  const cti = `  "${comboPrefix}": "${industrySlug}",`;
  if (!s.includes(cti)) {
    s = s.replace(
      /(const comboToIndustry: Record<ComboIndustrySlug, string> = \{[\s\S]*?)(\n\};)/,
      `$1\n${cti}$2`
    );
  }
  // Title — derive from industrySlug (capitalize words, prefix Marketing)
  const title = industrySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ") + " Marketing";
  const titleLine = `  "${comboPrefix}": "${title}",`;
  // Scope the includes-check to the COMBO_TITLES block specifically — otherwise
  // it false-positives on the comboToIndustry entry above.
  const titlesBlockMatch = s.match(/const COMBO_TITLES: Record<ComboIndustrySlug, string> = \{[\s\S]*?\n\};/);
  const inTitlesBlock = titlesBlockMatch && titlesBlockMatch[0].includes(`"${comboPrefix}":`);
  if (!inTitlesBlock) {
    s = s.replace(
      /(const COMBO_TITLES: Record<ComboIndustrySlug, string> = \{[\s\S]*?)(\n\};)/,
      `$1\n${titleLine}$2`
    );
  }
  return s;
});

// 4) app/industries/[slug]/page.tsx — append industryToCombo entry
patch("app/industries/[slug]/page.tsx", (s) => {
  const line = `  "${industrySlug}": "${comboPrefix}",`;
  if (!s.includes(line)) {
    s = s.replace(
      /(const industryToCombo: Record<string, ComboIndustrySlug> = \{[\s\S]*?)(\n\};)/,
      `$1\n${line}$2`
    );
  }
  return s;
});

// 5) Create app route if missing
const routeDir = path.join("app", comboPrefix, "[slug]");
const routeFile = path.join(routeDir, "page.tsx");
if (!fs.existsSync(routeFile)) {
  if (dry) {
    console.log(`  WOULD CREATE: ${routeFile}`);
  } else {
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(routeFile, `import ComboPage, {
  generateComboStaticParams,
  generateComboMetadata,
} from "@/components/seo/ComboPage";
import type { Metadata } from "next";

export const generateStaticParams = generateComboStaticParams;
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateComboMetadata("${comboPrefix}", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ComboPage comboSlug="${comboPrefix}" locationSlug={slug} />;
}
`);
    console.log(`  created: ${routeFile}`);
  }
} else {
  console.log(`  unchanged: ${routeFile}`);
}

console.log(`\nDone wiring vertical: ${industrySlug} → /${comboPrefix}/[slug]`);
