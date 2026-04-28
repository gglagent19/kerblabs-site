import ComboPage, {
  generateComboStaticParams,
  generateComboMetadata,
} from "@/components/seo/ComboPage";
import type { Metadata } from "next";

export const generateStaticParams = generateComboStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateComboMetadata("estate-agent-marketing", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ComboPage comboSlug="estate-agent-marketing" locationSlug={slug} />;
}
