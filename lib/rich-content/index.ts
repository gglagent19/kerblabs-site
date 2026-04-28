// Central index for all rich, genuinely unique per-page content.
import type { RichCityContent, RichComboContent } from "./types";

// City content imports — 25 Tier 1 cities
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

// Combo content imports — 100 Tier 1 combos (4 industries × 25 cities)
import { content as contractor_marketing_aberdeen } from "./combos/contractor-marketing-aberdeen";
import { content as contractor_marketing_belfast } from "./combos/contractor-marketing-belfast";
import { content as contractor_marketing_birmingham } from "./combos/contractor-marketing-birmingham";
import { content as contractor_marketing_bradford } from "./combos/contractor-marketing-bradford";
import { content as contractor_marketing_bristol } from "./combos/contractor-marketing-bristol";
import { content as contractor_marketing_cardiff } from "./combos/contractor-marketing-cardiff";
import { content as contractor_marketing_coventry } from "./combos/contractor-marketing-coventry";
import { content as contractor_marketing_derby } from "./combos/contractor-marketing-derby";
import { content as contractor_marketing_edinburgh } from "./combos/contractor-marketing-edinburgh";
import { content as contractor_marketing_glasgow } from "./combos/contractor-marketing-glasgow";
import { content as contractor_marketing_leeds } from "./combos/contractor-marketing-leeds";
import { content as contractor_marketing_leicester } from "./combos/contractor-marketing-leicester";
import { content as contractor_marketing_liverpool } from "./combos/contractor-marketing-liverpool";
import { content as contractor_marketing_london } from "./combos/contractor-marketing-london";
import { content as contractor_marketing_manchester } from "./combos/contractor-marketing-manchester";
import { content as contractor_marketing_newcastle } from "./combos/contractor-marketing-newcastle";
import { content as contractor_marketing_nottingham } from "./combos/contractor-marketing-nottingham";
import { content as contractor_marketing_plymouth } from "./combos/contractor-marketing-plymouth";
import { content as contractor_marketing_reading } from "./combos/contractor-marketing-reading";
import { content as contractor_marketing_sheffield } from "./combos/contractor-marketing-sheffield";
import { content as contractor_marketing_southampton } from "./combos/contractor-marketing-southampton";
import { content as contractor_marketing_stoke_on_trent } from "./combos/contractor-marketing-stoke-on-trent";
import { content as contractor_marketing_sunderland } from "./combos/contractor-marketing-sunderland";
import { content as contractor_marketing_swansea } from "./combos/contractor-marketing-swansea";
import { content as contractor_marketing_wolverhampton } from "./combos/contractor-marketing-wolverhampton";
import { content as dental_marketing_aberdeen } from "./combos/dental-marketing-aberdeen";
import { content as dental_marketing_belfast } from "./combos/dental-marketing-belfast";
import { content as dental_marketing_birmingham } from "./combos/dental-marketing-birmingham";
import { content as dental_marketing_bradford } from "./combos/dental-marketing-bradford";
import { content as dental_marketing_bristol } from "./combos/dental-marketing-bristol";
import { content as dental_marketing_cardiff } from "./combos/dental-marketing-cardiff";
import { content as dental_marketing_coventry } from "./combos/dental-marketing-coventry";
import { content as dental_marketing_derby } from "./combos/dental-marketing-derby";
import { content as dental_marketing_edinburgh } from "./combos/dental-marketing-edinburgh";
import { content as dental_marketing_glasgow } from "./combos/dental-marketing-glasgow";
import { content as dental_marketing_leeds } from "./combos/dental-marketing-leeds";
import { content as dental_marketing_leicester } from "./combos/dental-marketing-leicester";
import { content as dental_marketing_liverpool } from "./combos/dental-marketing-liverpool";
import { content as dental_marketing_london } from "./combos/dental-marketing-london";
import { content as dental_marketing_manchester } from "./combos/dental-marketing-manchester";
import { content as dental_marketing_newcastle } from "./combos/dental-marketing-newcastle";
import { content as dental_marketing_nottingham } from "./combos/dental-marketing-nottingham";
import { content as dental_marketing_plymouth } from "./combos/dental-marketing-plymouth";
import { content as dental_marketing_reading } from "./combos/dental-marketing-reading";
import { content as dental_marketing_sheffield } from "./combos/dental-marketing-sheffield";
import { content as dental_marketing_southampton } from "./combos/dental-marketing-southampton";
import { content as dental_marketing_stoke_on_trent } from "./combos/dental-marketing-stoke-on-trent";
import { content as dental_marketing_sunderland } from "./combos/dental-marketing-sunderland";
import { content as dental_marketing_swansea } from "./combos/dental-marketing-swansea";
import { content as dental_marketing_wolverhampton } from "./combos/dental-marketing-wolverhampton";
import { content as estate_agent_marketing_aberdeen } from "./combos/estate-agent-marketing-aberdeen";
import { content as estate_agent_marketing_belfast } from "./combos/estate-agent-marketing-belfast";
import { content as estate_agent_marketing_birmingham } from "./combos/estate-agent-marketing-birmingham";
import { content as estate_agent_marketing_bradford } from "./combos/estate-agent-marketing-bradford";
import { content as estate_agent_marketing_bristol } from "./combos/estate-agent-marketing-bristol";
import { content as estate_agent_marketing_cardiff } from "./combos/estate-agent-marketing-cardiff";
import { content as estate_agent_marketing_coventry } from "./combos/estate-agent-marketing-coventry";
import { content as estate_agent_marketing_derby } from "./combos/estate-agent-marketing-derby";
import { content as estate_agent_marketing_edinburgh } from "./combos/estate-agent-marketing-edinburgh";
import { content as estate_agent_marketing_glasgow } from "./combos/estate-agent-marketing-glasgow";
import { content as estate_agent_marketing_leeds } from "./combos/estate-agent-marketing-leeds";
import { content as estate_agent_marketing_leicester } from "./combos/estate-agent-marketing-leicester";
import { content as estate_agent_marketing_liverpool } from "./combos/estate-agent-marketing-liverpool";
import { content as estate_agent_marketing_london } from "./combos/estate-agent-marketing-london";
import { content as estate_agent_marketing_manchester } from "./combos/estate-agent-marketing-manchester";
import { content as estate_agent_marketing_newcastle } from "./combos/estate-agent-marketing-newcastle";
import { content as estate_agent_marketing_nottingham } from "./combos/estate-agent-marketing-nottingham";
import { content as estate_agent_marketing_plymouth } from "./combos/estate-agent-marketing-plymouth";
import { content as estate_agent_marketing_reading } from "./combos/estate-agent-marketing-reading";
import { content as estate_agent_marketing_sheffield } from "./combos/estate-agent-marketing-sheffield";
import { content as estate_agent_marketing_southampton } from "./combos/estate-agent-marketing-southampton";
import { content as estate_agent_marketing_stoke_on_trent } from "./combos/estate-agent-marketing-stoke-on-trent";
import { content as estate_agent_marketing_sunderland } from "./combos/estate-agent-marketing-sunderland";
import { content as estate_agent_marketing_swansea } from "./combos/estate-agent-marketing-swansea";
import { content as estate_agent_marketing_wolverhampton } from "./combos/estate-agent-marketing-wolverhampton";
import { content as salon_marketing_aberdeen } from "./combos/salon-marketing-aberdeen";
import { content as salon_marketing_belfast } from "./combos/salon-marketing-belfast";
import { content as salon_marketing_birmingham } from "./combos/salon-marketing-birmingham";
import { content as salon_marketing_bradford } from "./combos/salon-marketing-bradford";
import { content as salon_marketing_bristol } from "./combos/salon-marketing-bristol";
import { content as salon_marketing_cardiff } from "./combos/salon-marketing-cardiff";
import { content as salon_marketing_coventry } from "./combos/salon-marketing-coventry";
import { content as salon_marketing_derby } from "./combos/salon-marketing-derby";
import { content as salon_marketing_edinburgh } from "./combos/salon-marketing-edinburgh";
import { content as salon_marketing_glasgow } from "./combos/salon-marketing-glasgow";
import { content as salon_marketing_leeds } from "./combos/salon-marketing-leeds";
import { content as salon_marketing_leicester } from "./combos/salon-marketing-leicester";
import { content as salon_marketing_liverpool } from "./combos/salon-marketing-liverpool";
import { content as salon_marketing_london } from "./combos/salon-marketing-london";
import { content as salon_marketing_manchester } from "./combos/salon-marketing-manchester";
import { content as salon_marketing_newcastle } from "./combos/salon-marketing-newcastle";
import { content as salon_marketing_nottingham } from "./combos/salon-marketing-nottingham";
import { content as salon_marketing_plymouth } from "./combos/salon-marketing-plymouth";
import { content as salon_marketing_reading } from "./combos/salon-marketing-reading";
import { content as salon_marketing_sheffield } from "./combos/salon-marketing-sheffield";
import { content as salon_marketing_southampton } from "./combos/salon-marketing-southampton";
import { content as salon_marketing_stoke_on_trent } from "./combos/salon-marketing-stoke-on-trent";
import { content as salon_marketing_sunderland } from "./combos/salon-marketing-sunderland";
import { content as salon_marketing_swansea } from "./combos/salon-marketing-swansea";
import { content as salon_marketing_wolverhampton } from "./combos/salon-marketing-wolverhampton";

const COMBO_CONTENT: Record<string, RichComboContent> = {
  "contractor-marketing:aberdeen": contractor_marketing_aberdeen,
  "contractor-marketing:belfast": contractor_marketing_belfast,
  "contractor-marketing:birmingham": contractor_marketing_birmingham,
  "contractor-marketing:bradford": contractor_marketing_bradford,
  "contractor-marketing:bristol": contractor_marketing_bristol,
  "contractor-marketing:cardiff": contractor_marketing_cardiff,
  "contractor-marketing:coventry": contractor_marketing_coventry,
  "contractor-marketing:derby": contractor_marketing_derby,
  "contractor-marketing:edinburgh": contractor_marketing_edinburgh,
  "contractor-marketing:glasgow": contractor_marketing_glasgow,
  "contractor-marketing:leeds": contractor_marketing_leeds,
  "contractor-marketing:leicester": contractor_marketing_leicester,
  "contractor-marketing:liverpool": contractor_marketing_liverpool,
  "contractor-marketing:london": contractor_marketing_london,
  "contractor-marketing:manchester": contractor_marketing_manchester,
  "contractor-marketing:newcastle": contractor_marketing_newcastle,
  "contractor-marketing:nottingham": contractor_marketing_nottingham,
  "contractor-marketing:plymouth": contractor_marketing_plymouth,
  "contractor-marketing:reading": contractor_marketing_reading,
  "contractor-marketing:sheffield": contractor_marketing_sheffield,
  "contractor-marketing:southampton": contractor_marketing_southampton,
  "contractor-marketing:stoke-on-trent": contractor_marketing_stoke_on_trent,
  "contractor-marketing:sunderland": contractor_marketing_sunderland,
  "contractor-marketing:swansea": contractor_marketing_swansea,
  "contractor-marketing:wolverhampton": contractor_marketing_wolverhampton,
  "dental-marketing:aberdeen": dental_marketing_aberdeen,
  "dental-marketing:belfast": dental_marketing_belfast,
  "dental-marketing:birmingham": dental_marketing_birmingham,
  "dental-marketing:bradford": dental_marketing_bradford,
  "dental-marketing:bristol": dental_marketing_bristol,
  "dental-marketing:cardiff": dental_marketing_cardiff,
  "dental-marketing:coventry": dental_marketing_coventry,
  "dental-marketing:derby": dental_marketing_derby,
  "dental-marketing:edinburgh": dental_marketing_edinburgh,
  "dental-marketing:glasgow": dental_marketing_glasgow,
  "dental-marketing:leeds": dental_marketing_leeds,
  "dental-marketing:leicester": dental_marketing_leicester,
  "dental-marketing:liverpool": dental_marketing_liverpool,
  "dental-marketing:london": dental_marketing_london,
  "dental-marketing:manchester": dental_marketing_manchester,
  "dental-marketing:newcastle": dental_marketing_newcastle,
  "dental-marketing:nottingham": dental_marketing_nottingham,
  "dental-marketing:plymouth": dental_marketing_plymouth,
  "dental-marketing:reading": dental_marketing_reading,
  "dental-marketing:sheffield": dental_marketing_sheffield,
  "dental-marketing:southampton": dental_marketing_southampton,
  "dental-marketing:stoke-on-trent": dental_marketing_stoke_on_trent,
  "dental-marketing:sunderland": dental_marketing_sunderland,
  "dental-marketing:swansea": dental_marketing_swansea,
  "dental-marketing:wolverhampton": dental_marketing_wolverhampton,
  "estate-agent-marketing:aberdeen": estate_agent_marketing_aberdeen,
  "estate-agent-marketing:belfast": estate_agent_marketing_belfast,
  "estate-agent-marketing:birmingham": estate_agent_marketing_birmingham,
  "estate-agent-marketing:bradford": estate_agent_marketing_bradford,
  "estate-agent-marketing:bristol": estate_agent_marketing_bristol,
  "estate-agent-marketing:cardiff": estate_agent_marketing_cardiff,
  "estate-agent-marketing:coventry": estate_agent_marketing_coventry,
  "estate-agent-marketing:derby": estate_agent_marketing_derby,
  "estate-agent-marketing:edinburgh": estate_agent_marketing_edinburgh,
  "estate-agent-marketing:glasgow": estate_agent_marketing_glasgow,
  "estate-agent-marketing:leeds": estate_agent_marketing_leeds,
  "estate-agent-marketing:leicester": estate_agent_marketing_leicester,
  "estate-agent-marketing:liverpool": estate_agent_marketing_liverpool,
  "estate-agent-marketing:london": estate_agent_marketing_london,
  "estate-agent-marketing:manchester": estate_agent_marketing_manchester,
  "estate-agent-marketing:newcastle": estate_agent_marketing_newcastle,
  "estate-agent-marketing:nottingham": estate_agent_marketing_nottingham,
  "estate-agent-marketing:plymouth": estate_agent_marketing_plymouth,
  "estate-agent-marketing:reading": estate_agent_marketing_reading,
  "estate-agent-marketing:sheffield": estate_agent_marketing_sheffield,
  "estate-agent-marketing:southampton": estate_agent_marketing_southampton,
  "estate-agent-marketing:stoke-on-trent": estate_agent_marketing_stoke_on_trent,
  "estate-agent-marketing:sunderland": estate_agent_marketing_sunderland,
  "estate-agent-marketing:swansea": estate_agent_marketing_swansea,
  "estate-agent-marketing:wolverhampton": estate_agent_marketing_wolverhampton,
  "salon-marketing:aberdeen": salon_marketing_aberdeen,
  "salon-marketing:belfast": salon_marketing_belfast,
  "salon-marketing:birmingham": salon_marketing_birmingham,
  "salon-marketing:bradford": salon_marketing_bradford,
  "salon-marketing:bristol": salon_marketing_bristol,
  "salon-marketing:cardiff": salon_marketing_cardiff,
  "salon-marketing:coventry": salon_marketing_coventry,
  "salon-marketing:derby": salon_marketing_derby,
  "salon-marketing:edinburgh": salon_marketing_edinburgh,
  "salon-marketing:glasgow": salon_marketing_glasgow,
  "salon-marketing:leeds": salon_marketing_leeds,
  "salon-marketing:leicester": salon_marketing_leicester,
  "salon-marketing:liverpool": salon_marketing_liverpool,
  "salon-marketing:london": salon_marketing_london,
  "salon-marketing:manchester": salon_marketing_manchester,
  "salon-marketing:newcastle": salon_marketing_newcastle,
  "salon-marketing:nottingham": salon_marketing_nottingham,
  "salon-marketing:plymouth": salon_marketing_plymouth,
  "salon-marketing:reading": salon_marketing_reading,
  "salon-marketing:sheffield": salon_marketing_sheffield,
  "salon-marketing:southampton": salon_marketing_southampton,
  "salon-marketing:stoke-on-trent": salon_marketing_stoke_on_trent,
  "salon-marketing:sunderland": salon_marketing_sunderland,
  "salon-marketing:swansea": salon_marketing_swansea,
  "salon-marketing:wolverhampton": salon_marketing_wolverhampton,
};

export function getRichComboContent(
  industrySlug: string,
  citySlug: string
): RichComboContent | undefined {
  return COMBO_CONTENT[`${industrySlug}:${citySlug}`];
}
