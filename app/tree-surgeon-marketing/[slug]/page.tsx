import ComboPage, {
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
  return generateComboMetadata("tree-surgeon-marketing", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ComboPage comboSlug="tree-surgeon-marketing" locationSlug={slug} />;
}
