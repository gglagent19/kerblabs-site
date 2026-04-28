// Central index for all rich, genuinely unique per-page content.
// Imports each city's content file and exposes a lookup function.

import type { RichCityContent, RichComboContent } from "./types";

// City content imports — 25 Tier 1 cities, each genuinely unique
import { content as aberdeen } from "./cities/aberdeen";
import { content as belfast } from "./cities/belfast";
import { content as birmingham } from "./cities/birmingham";
import { content as bradford } from "./cities/bradford";
import { content as bristol } from "./cities/bristol";
import { content as cardiff } from "./cities/cardiff";
import { content as coventry } from "./cities/coventry";
import { content as derby } from "./cities/derby";
import { content as edinburgh } from "./cities/edinburgh";
import { content as glasgow } from "./cities/glasgow";
import { content as leeds } from "./cities/leeds";
import { content as leicester } from "./cities/leicester";
import { content as liverpool } from "./cities/liverpool";
import { content as london } from "./cities/london";
import { content as manchester } from "./cities/manchester";
import { content as newcastle } from "./cities/newcastle";
import { content as nottingham } from "./cities/nottingham";
import { content as plymouth } from "./cities/plymouth";
import { content as reading } from "./cities/reading";
import { content as sheffield } from "./cities/sheffield";
import { content as southampton } from "./cities/southampton";
import { content as stokeOnTrent } from "./cities/stoke-on-trent";
import { content as sunderland } from "./cities/sunderland";
import { content as swansea } from "./cities/swansea";
import { content as wolverhampton } from "./cities/wolverhampton";

const CITY_CONTENT: Record<string, RichCityContent> = {
  aberdeen,
  belfast,
  birmingham,
  bradford,
  bristol,
  cardiff,
  coventry,
  derby,
  edinburgh,
  glasgow,
  leeds,
  leicester,
  liverpool,
  london,
  manchester,
  newcastle,
  nottingham,
  plymouth,
  reading,
  sheffield,
  southampton,
  "stoke-on-trent": stokeOnTrent,
  sunderland,
  swansea,
  wolverhampton,
};

export function getRichCityContent(slug: string): RichCityContent | undefined {
  return CITY_CONTENT[slug];
}

// Combo content — populated as combo files are written.
const COMBO_CONTENT: Record<string, RichComboContent> = {};

export function getRichComboContent(
  industrySlug: string,
  citySlug: string
): RichComboContent | undefined {
  return COMBO_CONTENT[`${industrySlug}:${citySlug}`];
}

// Helper to register combo content (used by individual combo content files)
export function registerCombo(
  industrySlug: string,
  citySlug: string,
  content: RichComboContent
) {
  COMBO_CONTENT[`${industrySlug}:${citySlug}`] = content;
}
