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

import { content as aesthetic_clinic_marketing_aberdeen } from "./combos/aesthetic-clinic-marketing-aberdeen";
import { content as aesthetic_clinic_marketing_belfast } from "./combos/aesthetic-clinic-marketing-belfast";
import { content as aesthetic_clinic_marketing_birmingham } from "./combos/aesthetic-clinic-marketing-birmingham";
import { content as aesthetic_clinic_marketing_bradford } from "./combos/aesthetic-clinic-marketing-bradford";
import { content as aesthetic_clinic_marketing_bristol } from "./combos/aesthetic-clinic-marketing-bristol";
import { content as aesthetic_clinic_marketing_cardiff } from "./combos/aesthetic-clinic-marketing-cardiff";
import { content as aesthetic_clinic_marketing_coventry } from "./combos/aesthetic-clinic-marketing-coventry";
import { content as aesthetic_clinic_marketing_derby } from "./combos/aesthetic-clinic-marketing-derby";
import { content as aesthetic_clinic_marketing_edinburgh } from "./combos/aesthetic-clinic-marketing-edinburgh";
import { content as aesthetic_clinic_marketing_glasgow } from "./combos/aesthetic-clinic-marketing-glasgow";
import { content as aesthetic_clinic_marketing_leeds } from "./combos/aesthetic-clinic-marketing-leeds";
import { content as aesthetic_clinic_marketing_leicester } from "./combos/aesthetic-clinic-marketing-leicester";
import { content as aesthetic_clinic_marketing_liverpool } from "./combos/aesthetic-clinic-marketing-liverpool";
import { content as aesthetic_clinic_marketing_london } from "./combos/aesthetic-clinic-marketing-london";
import { content as aesthetic_clinic_marketing_manchester } from "./combos/aesthetic-clinic-marketing-manchester";
import { content as aesthetic_clinic_marketing_newcastle } from "./combos/aesthetic-clinic-marketing-newcastle";
import { content as aesthetic_clinic_marketing_nottingham } from "./combos/aesthetic-clinic-marketing-nottingham";
import { content as aesthetic_clinic_marketing_plymouth } from "./combos/aesthetic-clinic-marketing-plymouth";
import { content as aesthetic_clinic_marketing_reading } from "./combos/aesthetic-clinic-marketing-reading";
import { content as aesthetic_clinic_marketing_sheffield } from "./combos/aesthetic-clinic-marketing-sheffield";
import { content as aesthetic_clinic_marketing_southampton } from "./combos/aesthetic-clinic-marketing-southampton";
import { content as aesthetic_clinic_marketing_stoke_on_trent } from "./combos/aesthetic-clinic-marketing-stoke-on-trent";
import { content as aesthetic_clinic_marketing_sunderland } from "./combos/aesthetic-clinic-marketing-sunderland";
import { content as aesthetic_clinic_marketing_swansea } from "./combos/aesthetic-clinic-marketing-swansea";
import { content as aesthetic_clinic_marketing_wolverhampton } from "./combos/aesthetic-clinic-marketing-wolverhampton";
import { content as gp_marketing_aberdeen } from "./combos/gp-marketing-aberdeen";
import { content as gp_marketing_belfast } from "./combos/gp-marketing-belfast";
import { content as gp_marketing_birmingham } from "./combos/gp-marketing-birmingham";
import { content as gp_marketing_bradford } from "./combos/gp-marketing-bradford";
import { content as gp_marketing_bristol } from "./combos/gp-marketing-bristol";
import { content as gp_marketing_cardiff } from "./combos/gp-marketing-cardiff";
import { content as gp_marketing_coventry } from "./combos/gp-marketing-coventry";
import { content as gp_marketing_derby } from "./combos/gp-marketing-derby";
import { content as gp_marketing_edinburgh } from "./combos/gp-marketing-edinburgh";
import { content as gp_marketing_glasgow } from "./combos/gp-marketing-glasgow";
import { content as gp_marketing_leeds } from "./combos/gp-marketing-leeds";
import { content as gp_marketing_leicester } from "./combos/gp-marketing-leicester";
import { content as gp_marketing_liverpool } from "./combos/gp-marketing-liverpool";
import { content as gp_marketing_london } from "./combos/gp-marketing-london";
import { content as gp_marketing_manchester } from "./combos/gp-marketing-manchester";
import { content as gp_marketing_newcastle } from "./combos/gp-marketing-newcastle";
import { content as gp_marketing_nottingham } from "./combos/gp-marketing-nottingham";
import { content as gp_marketing_plymouth } from "./combos/gp-marketing-plymouth";
import { content as gp_marketing_reading } from "./combos/gp-marketing-reading";
import { content as gp_marketing_sheffield } from "./combos/gp-marketing-sheffield";
import { content as gp_marketing_southampton } from "./combos/gp-marketing-southampton";
import { content as gp_marketing_stoke_on_trent } from "./combos/gp-marketing-stoke-on-trent";
import { content as gp_marketing_sunderland } from "./combos/gp-marketing-sunderland";
import { content as gp_marketing_swansea } from "./combos/gp-marketing-swansea";
import { content as gp_marketing_wolverhampton } from "./combos/gp-marketing-wolverhampton";
import { content as junk_removal_marketing_aberdeen } from "./combos/junk-removal-marketing-aberdeen";
import { content as junk_removal_marketing_belfast } from "./combos/junk-removal-marketing-belfast";
import { content as junk_removal_marketing_birmingham } from "./combos/junk-removal-marketing-birmingham";
import { content as junk_removal_marketing_bradford } from "./combos/junk-removal-marketing-bradford";
import { content as junk_removal_marketing_bristol } from "./combos/junk-removal-marketing-bristol";
import { content as junk_removal_marketing_cardiff } from "./combos/junk-removal-marketing-cardiff";
import { content as junk_removal_marketing_coventry } from "./combos/junk-removal-marketing-coventry";
import { content as junk_removal_marketing_derby } from "./combos/junk-removal-marketing-derby";
import { content as junk_removal_marketing_edinburgh } from "./combos/junk-removal-marketing-edinburgh";
import { content as junk_removal_marketing_glasgow } from "./combos/junk-removal-marketing-glasgow";
import { content as junk_removal_marketing_leeds } from "./combos/junk-removal-marketing-leeds";
import { content as junk_removal_marketing_leicester } from "./combos/junk-removal-marketing-leicester";
import { content as junk_removal_marketing_liverpool } from "./combos/junk-removal-marketing-liverpool";
import { content as junk_removal_marketing_london } from "./combos/junk-removal-marketing-london";
import { content as junk_removal_marketing_manchester } from "./combos/junk-removal-marketing-manchester";
import { content as junk_removal_marketing_newcastle } from "./combos/junk-removal-marketing-newcastle";
import { content as junk_removal_marketing_nottingham } from "./combos/junk-removal-marketing-nottingham";
import { content as junk_removal_marketing_plymouth } from "./combos/junk-removal-marketing-plymouth";
import { content as junk_removal_marketing_reading } from "./combos/junk-removal-marketing-reading";
import { content as junk_removal_marketing_sheffield } from "./combos/junk-removal-marketing-sheffield";
import { content as junk_removal_marketing_southampton } from "./combos/junk-removal-marketing-southampton";
import { content as junk_removal_marketing_stoke_on_trent } from "./combos/junk-removal-marketing-stoke-on-trent";
import { content as junk_removal_marketing_sunderland } from "./combos/junk-removal-marketing-sunderland";
import { content as junk_removal_marketing_swansea } from "./combos/junk-removal-marketing-swansea";
import { content as junk_removal_marketing_wolverhampton } from "./combos/junk-removal-marketing-wolverhampton";
import { content as roofer_marketing_aberdeen } from "./combos/roofer-marketing-aberdeen";
import { content as roofer_marketing_belfast } from "./combos/roofer-marketing-belfast";
import { content as roofer_marketing_birmingham } from "./combos/roofer-marketing-birmingham";
import { content as roofer_marketing_bradford } from "./combos/roofer-marketing-bradford";
import { content as roofer_marketing_bristol } from "./combos/roofer-marketing-bristol";
import { content as roofer_marketing_cardiff } from "./combos/roofer-marketing-cardiff";
import { content as roofer_marketing_coventry } from "./combos/roofer-marketing-coventry";
import { content as roofer_marketing_derby } from "./combos/roofer-marketing-derby";
import { content as roofer_marketing_edinburgh } from "./combos/roofer-marketing-edinburgh";
import { content as roofer_marketing_glasgow } from "./combos/roofer-marketing-glasgow";
import { content as roofer_marketing_leeds } from "./combos/roofer-marketing-leeds";
import { content as roofer_marketing_leicester } from "./combos/roofer-marketing-leicester";
import { content as roofer_marketing_liverpool } from "./combos/roofer-marketing-liverpool";
import { content as roofer_marketing_london } from "./combos/roofer-marketing-london";
import { content as roofer_marketing_manchester } from "./combos/roofer-marketing-manchester";
import { content as roofer_marketing_newcastle } from "./combos/roofer-marketing-newcastle";
import { content as roofer_marketing_nottingham } from "./combos/roofer-marketing-nottingham";
import { content as roofer_marketing_plymouth } from "./combos/roofer-marketing-plymouth";
import { content as roofer_marketing_reading } from "./combos/roofer-marketing-reading";
import { content as roofer_marketing_sheffield } from "./combos/roofer-marketing-sheffield";
import { content as roofer_marketing_southampton } from "./combos/roofer-marketing-southampton";
import { content as roofer_marketing_stoke_on_trent } from "./combos/roofer-marketing-stoke-on-trent";
import { content as roofer_marketing_sunderland } from "./combos/roofer-marketing-sunderland";
import { content as roofer_marketing_swansea } from "./combos/roofer-marketing-swansea";
import { content as roofer_marketing_wolverhampton } from "./combos/roofer-marketing-wolverhampton";
import { content as vet_marketing_aberdeen } from "./combos/vet-marketing-aberdeen";
import { content as vet_marketing_belfast } from "./combos/vet-marketing-belfast";
import { content as vet_marketing_birmingham } from "./combos/vet-marketing-birmingham";
import { content as vet_marketing_bradford } from "./combos/vet-marketing-bradford";
import { content as vet_marketing_bristol } from "./combos/vet-marketing-bristol";
import { content as vet_marketing_cardiff } from "./combos/vet-marketing-cardiff";
import { content as vet_marketing_coventry } from "./combos/vet-marketing-coventry";
import { content as vet_marketing_derby } from "./combos/vet-marketing-derby";
import { content as vet_marketing_edinburgh } from "./combos/vet-marketing-edinburgh";
import { content as vet_marketing_glasgow } from "./combos/vet-marketing-glasgow";
import { content as vet_marketing_leeds } from "./combos/vet-marketing-leeds";
import { content as vet_marketing_leicester } from "./combos/vet-marketing-leicester";
import { content as vet_marketing_liverpool } from "./combos/vet-marketing-liverpool";
import { content as vet_marketing_london } from "./combos/vet-marketing-london";
import { content as vet_marketing_manchester } from "./combos/vet-marketing-manchester";
import { content as vet_marketing_newcastle } from "./combos/vet-marketing-newcastle";
import { content as vet_marketing_nottingham } from "./combos/vet-marketing-nottingham";
import { content as vet_marketing_plymouth } from "./combos/vet-marketing-plymouth";
import { content as vet_marketing_reading } from "./combos/vet-marketing-reading";
import { content as vet_marketing_sheffield } from "./combos/vet-marketing-sheffield";
import { content as vet_marketing_southampton } from "./combos/vet-marketing-southampton";
import { content as vet_marketing_stoke_on_trent } from "./combos/vet-marketing-stoke-on-trent";
import { content as vet_marketing_sunderland } from "./combos/vet-marketing-sunderland";
import { content as vet_marketing_swansea } from "./combos/vet-marketing-swansea";
import { content as vet_marketing_wolverhampton } from "./combos/vet-marketing-wolverhampton";

import { content as optician_marketing_aberdeen } from "./combos/optician-marketing-aberdeen";
import { content as optician_marketing_belfast } from "./combos/optician-marketing-belfast";
import { content as optician_marketing_birmingham } from "./combos/optician-marketing-birmingham";
import { content as optician_marketing_bradford } from "./combos/optician-marketing-bradford";
import { content as optician_marketing_bristol } from "./combos/optician-marketing-bristol";
import { content as optician_marketing_cardiff } from "./combos/optician-marketing-cardiff";
import { content as optician_marketing_coventry } from "./combos/optician-marketing-coventry";
import { content as optician_marketing_derby } from "./combos/optician-marketing-derby";
import { content as optician_marketing_edinburgh } from "./combos/optician-marketing-edinburgh";
import { content as optician_marketing_glasgow } from "./combos/optician-marketing-glasgow";
import { content as optician_marketing_leeds } from "./combos/optician-marketing-leeds";
import { content as optician_marketing_leicester } from "./combos/optician-marketing-leicester";
import { content as optician_marketing_liverpool } from "./combos/optician-marketing-liverpool";
import { content as optician_marketing_london } from "./combos/optician-marketing-london";
import { content as optician_marketing_manchester } from "./combos/optician-marketing-manchester";
import { content as optician_marketing_newcastle } from "./combos/optician-marketing-newcastle";
import { content as optician_marketing_nottingham } from "./combos/optician-marketing-nottingham";
import { content as optician_marketing_plymouth } from "./combos/optician-marketing-plymouth";
import { content as optician_marketing_reading } from "./combos/optician-marketing-reading";
import { content as optician_marketing_sheffield } from "./combos/optician-marketing-sheffield";
import { content as optician_marketing_southampton } from "./combos/optician-marketing-southampton";
import { content as optician_marketing_stoke_on_trent } from "./combos/optician-marketing-stoke-on-trent";
import { content as optician_marketing_sunderland } from "./combos/optician-marketing-sunderland";
import { content as optician_marketing_swansea } from "./combos/optician-marketing-swansea";
import { content as optician_marketing_wolverhampton } from "./combos/optician-marketing-wolverhampton";
import { content as physio_marketing_aberdeen } from "./combos/physio-marketing-aberdeen";
import { content as physio_marketing_belfast } from "./combos/physio-marketing-belfast";
import { content as physio_marketing_birmingham } from "./combos/physio-marketing-birmingham";
import { content as physio_marketing_bradford } from "./combos/physio-marketing-bradford";
import { content as physio_marketing_bristol } from "./combos/physio-marketing-bristol";
import { content as physio_marketing_cardiff } from "./combos/physio-marketing-cardiff";
import { content as physio_marketing_coventry } from "./combos/physio-marketing-coventry";
import { content as physio_marketing_derby } from "./combos/physio-marketing-derby";
import { content as physio_marketing_edinburgh } from "./combos/physio-marketing-edinburgh";
import { content as physio_marketing_glasgow } from "./combos/physio-marketing-glasgow";
import { content as physio_marketing_leeds } from "./combos/physio-marketing-leeds";
import { content as physio_marketing_leicester } from "./combos/physio-marketing-leicester";
import { content as physio_marketing_liverpool } from "./combos/physio-marketing-liverpool";
import { content as physio_marketing_london } from "./combos/physio-marketing-london";
import { content as physio_marketing_manchester } from "./combos/physio-marketing-manchester";
import { content as physio_marketing_newcastle } from "./combos/physio-marketing-newcastle";
import { content as physio_marketing_nottingham } from "./combos/physio-marketing-nottingham";
import { content as physio_marketing_plymouth } from "./combos/physio-marketing-plymouth";
import { content as physio_marketing_reading } from "./combos/physio-marketing-reading";
import { content as physio_marketing_sheffield } from "./combos/physio-marketing-sheffield";
import { content as physio_marketing_southampton } from "./combos/physio-marketing-southampton";
import { content as physio_marketing_stoke_on_trent } from "./combos/physio-marketing-stoke-on-trent";
import { content as physio_marketing_sunderland } from "./combos/physio-marketing-sunderland";
import { content as physio_marketing_swansea } from "./combos/physio-marketing-swansea";
import { content as physio_marketing_wolverhampton } from "./combos/physio-marketing-wolverhampton";
import { content as funeral_marketing_aberdeen } from "./combos/funeral-marketing-aberdeen";
import { content as funeral_marketing_belfast } from "./combos/funeral-marketing-belfast";
import { content as funeral_marketing_birmingham } from "./combos/funeral-marketing-birmingham";
import { content as funeral_marketing_bradford } from "./combos/funeral-marketing-bradford";
import { content as funeral_marketing_bristol } from "./combos/funeral-marketing-bristol";
import { content as funeral_marketing_cardiff } from "./combos/funeral-marketing-cardiff";
import { content as funeral_marketing_coventry } from "./combos/funeral-marketing-coventry";
import { content as funeral_marketing_derby } from "./combos/funeral-marketing-derby";
import { content as funeral_marketing_edinburgh } from "./combos/funeral-marketing-edinburgh";
import { content as funeral_marketing_glasgow } from "./combos/funeral-marketing-glasgow";
import { content as funeral_marketing_leeds } from "./combos/funeral-marketing-leeds";
import { content as funeral_marketing_leicester } from "./combos/funeral-marketing-leicester";
import { content as funeral_marketing_liverpool } from "./combos/funeral-marketing-liverpool";
import { content as funeral_marketing_london } from "./combos/funeral-marketing-london";
import { content as funeral_marketing_manchester } from "./combos/funeral-marketing-manchester";
import { content as funeral_marketing_newcastle } from "./combos/funeral-marketing-newcastle";
import { content as funeral_marketing_nottingham } from "./combos/funeral-marketing-nottingham";
import { content as funeral_marketing_plymouth } from "./combos/funeral-marketing-plymouth";
import { content as funeral_marketing_reading } from "./combos/funeral-marketing-reading";
import { content as funeral_marketing_sheffield } from "./combos/funeral-marketing-sheffield";
import { content as funeral_marketing_southampton } from "./combos/funeral-marketing-southampton";
import { content as funeral_marketing_stoke_on_trent } from "./combos/funeral-marketing-stoke-on-trent";
import { content as funeral_marketing_sunderland } from "./combos/funeral-marketing-sunderland";
import { content as funeral_marketing_swansea } from "./combos/funeral-marketing-swansea";
import { content as funeral_marketing_wolverhampton } from "./combos/funeral-marketing-wolverhampton";
import { content as solicitor_marketing_aberdeen } from "./combos/solicitor-marketing-aberdeen";
import { content as solicitor_marketing_belfast } from "./combos/solicitor-marketing-belfast";
import { content as solicitor_marketing_birmingham } from "./combos/solicitor-marketing-birmingham";
import { content as solicitor_marketing_bradford } from "./combos/solicitor-marketing-bradford";
import { content as solicitor_marketing_bristol } from "./combos/solicitor-marketing-bristol";
import { content as solicitor_marketing_cardiff } from "./combos/solicitor-marketing-cardiff";
import { content as solicitor_marketing_coventry } from "./combos/solicitor-marketing-coventry";
import { content as solicitor_marketing_derby } from "./combos/solicitor-marketing-derby";
import { content as solicitor_marketing_edinburgh } from "./combos/solicitor-marketing-edinburgh";
import { content as solicitor_marketing_glasgow } from "./combos/solicitor-marketing-glasgow";
import { content as solicitor_marketing_leeds } from "./combos/solicitor-marketing-leeds";
import { content as solicitor_marketing_leicester } from "./combos/solicitor-marketing-leicester";
import { content as solicitor_marketing_liverpool } from "./combos/solicitor-marketing-liverpool";
import { content as solicitor_marketing_london } from "./combos/solicitor-marketing-london";
import { content as solicitor_marketing_manchester } from "./combos/solicitor-marketing-manchester";
import { content as solicitor_marketing_newcastle } from "./combos/solicitor-marketing-newcastle";
import { content as solicitor_marketing_nottingham } from "./combos/solicitor-marketing-nottingham";
import { content as solicitor_marketing_plymouth } from "./combos/solicitor-marketing-plymouth";
import { content as solicitor_marketing_reading } from "./combos/solicitor-marketing-reading";
import { content as solicitor_marketing_sheffield } from "./combos/solicitor-marketing-sheffield";
import { content as solicitor_marketing_southampton } from "./combos/solicitor-marketing-southampton";
import { content as solicitor_marketing_stoke_on_trent } from "./combos/solicitor-marketing-stoke-on-trent";
import { content as solicitor_marketing_sunderland } from "./combos/solicitor-marketing-sunderland";
import { content as solicitor_marketing_swansea } from "./combos/solicitor-marketing-swansea";
import { content as solicitor_marketing_wolverhampton } from "./combos/solicitor-marketing-wolverhampton";
import { content as accountant_marketing_aberdeen } from "./combos/accountant-marketing-aberdeen";
import { content as accountant_marketing_belfast } from "./combos/accountant-marketing-belfast";
import { content as accountant_marketing_birmingham } from "./combos/accountant-marketing-birmingham";
import { content as accountant_marketing_bradford } from "./combos/accountant-marketing-bradford";
import { content as accountant_marketing_bristol } from "./combos/accountant-marketing-bristol";
import { content as accountant_marketing_cardiff } from "./combos/accountant-marketing-cardiff";
import { content as accountant_marketing_coventry } from "./combos/accountant-marketing-coventry";
import { content as accountant_marketing_derby } from "./combos/accountant-marketing-derby";
import { content as accountant_marketing_edinburgh } from "./combos/accountant-marketing-edinburgh";
import { content as accountant_marketing_glasgow } from "./combos/accountant-marketing-glasgow";
import { content as accountant_marketing_leeds } from "./combos/accountant-marketing-leeds";
import { content as accountant_marketing_leicester } from "./combos/accountant-marketing-leicester";
import { content as accountant_marketing_liverpool } from "./combos/accountant-marketing-liverpool";
import { content as accountant_marketing_london } from "./combos/accountant-marketing-london";
import { content as accountant_marketing_manchester } from "./combos/accountant-marketing-manchester";
import { content as accountant_marketing_newcastle } from "./combos/accountant-marketing-newcastle";
import { content as accountant_marketing_nottingham } from "./combos/accountant-marketing-nottingham";
import { content as accountant_marketing_plymouth } from "./combos/accountant-marketing-plymouth";
import { content as accountant_marketing_reading } from "./combos/accountant-marketing-reading";
import { content as accountant_marketing_sheffield } from "./combos/accountant-marketing-sheffield";
import { content as accountant_marketing_southampton } from "./combos/accountant-marketing-southampton";
import { content as accountant_marketing_stoke_on_trent } from "./combos/accountant-marketing-stoke-on-trent";
import { content as accountant_marketing_sunderland } from "./combos/accountant-marketing-sunderland";
import { content as accountant_marketing_swansea } from "./combos/accountant-marketing-swansea";
import { content as accountant_marketing_wolverhampton } from "./combos/accountant-marketing-wolverhampton";
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
  "aesthetic-clinic-marketing:aberdeen": aesthetic_clinic_marketing_aberdeen,
  "aesthetic-clinic-marketing:belfast": aesthetic_clinic_marketing_belfast,
  "aesthetic-clinic-marketing:birmingham": aesthetic_clinic_marketing_birmingham,
  "aesthetic-clinic-marketing:bradford": aesthetic_clinic_marketing_bradford,
  "aesthetic-clinic-marketing:bristol": aesthetic_clinic_marketing_bristol,
  "aesthetic-clinic-marketing:cardiff": aesthetic_clinic_marketing_cardiff,
  "aesthetic-clinic-marketing:coventry": aesthetic_clinic_marketing_coventry,
  "aesthetic-clinic-marketing:derby": aesthetic_clinic_marketing_derby,
  "aesthetic-clinic-marketing:edinburgh": aesthetic_clinic_marketing_edinburgh,
  "aesthetic-clinic-marketing:glasgow": aesthetic_clinic_marketing_glasgow,
  "aesthetic-clinic-marketing:leeds": aesthetic_clinic_marketing_leeds,
  "aesthetic-clinic-marketing:leicester": aesthetic_clinic_marketing_leicester,
  "aesthetic-clinic-marketing:liverpool": aesthetic_clinic_marketing_liverpool,
  "aesthetic-clinic-marketing:london": aesthetic_clinic_marketing_london,
  "aesthetic-clinic-marketing:manchester": aesthetic_clinic_marketing_manchester,
  "aesthetic-clinic-marketing:newcastle": aesthetic_clinic_marketing_newcastle,
  "aesthetic-clinic-marketing:nottingham": aesthetic_clinic_marketing_nottingham,
  "aesthetic-clinic-marketing:plymouth": aesthetic_clinic_marketing_plymouth,
  "aesthetic-clinic-marketing:reading": aesthetic_clinic_marketing_reading,
  "aesthetic-clinic-marketing:sheffield": aesthetic_clinic_marketing_sheffield,
  "aesthetic-clinic-marketing:southampton": aesthetic_clinic_marketing_southampton,
  "aesthetic-clinic-marketing:stoke-on-trent": aesthetic_clinic_marketing_stoke_on_trent,
  "aesthetic-clinic-marketing:sunderland": aesthetic_clinic_marketing_sunderland,
  "aesthetic-clinic-marketing:swansea": aesthetic_clinic_marketing_swansea,
  "aesthetic-clinic-marketing:wolverhampton": aesthetic_clinic_marketing_wolverhampton,
  "gp-marketing:aberdeen": gp_marketing_aberdeen,
  "gp-marketing:belfast": gp_marketing_belfast,
  "gp-marketing:birmingham": gp_marketing_birmingham,
  "gp-marketing:bradford": gp_marketing_bradford,
  "gp-marketing:bristol": gp_marketing_bristol,
  "gp-marketing:cardiff": gp_marketing_cardiff,
  "gp-marketing:coventry": gp_marketing_coventry,
  "gp-marketing:derby": gp_marketing_derby,
  "gp-marketing:edinburgh": gp_marketing_edinburgh,
  "gp-marketing:glasgow": gp_marketing_glasgow,
  "gp-marketing:leeds": gp_marketing_leeds,
  "gp-marketing:leicester": gp_marketing_leicester,
  "gp-marketing:liverpool": gp_marketing_liverpool,
  "gp-marketing:london": gp_marketing_london,
  "gp-marketing:manchester": gp_marketing_manchester,
  "gp-marketing:newcastle": gp_marketing_newcastle,
  "gp-marketing:nottingham": gp_marketing_nottingham,
  "gp-marketing:plymouth": gp_marketing_plymouth,
  "gp-marketing:reading": gp_marketing_reading,
  "gp-marketing:sheffield": gp_marketing_sheffield,
  "gp-marketing:southampton": gp_marketing_southampton,
  "gp-marketing:stoke-on-trent": gp_marketing_stoke_on_trent,
  "gp-marketing:sunderland": gp_marketing_sunderland,
  "gp-marketing:swansea": gp_marketing_swansea,
  "gp-marketing:wolverhampton": gp_marketing_wolverhampton,
  "junk-removal-marketing:aberdeen": junk_removal_marketing_aberdeen,
  "junk-removal-marketing:belfast": junk_removal_marketing_belfast,
  "junk-removal-marketing:birmingham": junk_removal_marketing_birmingham,
  "junk-removal-marketing:bradford": junk_removal_marketing_bradford,
  "junk-removal-marketing:bristol": junk_removal_marketing_bristol,
  "junk-removal-marketing:cardiff": junk_removal_marketing_cardiff,
  "junk-removal-marketing:coventry": junk_removal_marketing_coventry,
  "junk-removal-marketing:derby": junk_removal_marketing_derby,
  "junk-removal-marketing:edinburgh": junk_removal_marketing_edinburgh,
  "junk-removal-marketing:glasgow": junk_removal_marketing_glasgow,
  "junk-removal-marketing:leeds": junk_removal_marketing_leeds,
  "junk-removal-marketing:leicester": junk_removal_marketing_leicester,
  "junk-removal-marketing:liverpool": junk_removal_marketing_liverpool,
  "junk-removal-marketing:london": junk_removal_marketing_london,
  "junk-removal-marketing:manchester": junk_removal_marketing_manchester,
  "junk-removal-marketing:newcastle": junk_removal_marketing_newcastle,
  "junk-removal-marketing:nottingham": junk_removal_marketing_nottingham,
  "junk-removal-marketing:plymouth": junk_removal_marketing_plymouth,
  "junk-removal-marketing:reading": junk_removal_marketing_reading,
  "junk-removal-marketing:sheffield": junk_removal_marketing_sheffield,
  "junk-removal-marketing:southampton": junk_removal_marketing_southampton,
  "junk-removal-marketing:stoke-on-trent": junk_removal_marketing_stoke_on_trent,
  "junk-removal-marketing:sunderland": junk_removal_marketing_sunderland,
  "junk-removal-marketing:swansea": junk_removal_marketing_swansea,
  "junk-removal-marketing:wolverhampton": junk_removal_marketing_wolverhampton,
  "roofer-marketing:aberdeen": roofer_marketing_aberdeen,
  "roofer-marketing:belfast": roofer_marketing_belfast,
  "roofer-marketing:birmingham": roofer_marketing_birmingham,
  "roofer-marketing:bradford": roofer_marketing_bradford,
  "roofer-marketing:bristol": roofer_marketing_bristol,
  "roofer-marketing:cardiff": roofer_marketing_cardiff,
  "roofer-marketing:coventry": roofer_marketing_coventry,
  "roofer-marketing:derby": roofer_marketing_derby,
  "roofer-marketing:edinburgh": roofer_marketing_edinburgh,
  "roofer-marketing:glasgow": roofer_marketing_glasgow,
  "roofer-marketing:leeds": roofer_marketing_leeds,
  "roofer-marketing:leicester": roofer_marketing_leicester,
  "roofer-marketing:liverpool": roofer_marketing_liverpool,
  "roofer-marketing:london": roofer_marketing_london,
  "roofer-marketing:manchester": roofer_marketing_manchester,
  "roofer-marketing:newcastle": roofer_marketing_newcastle,
  "roofer-marketing:nottingham": roofer_marketing_nottingham,
  "roofer-marketing:plymouth": roofer_marketing_plymouth,
  "roofer-marketing:reading": roofer_marketing_reading,
  "roofer-marketing:sheffield": roofer_marketing_sheffield,
  "roofer-marketing:southampton": roofer_marketing_southampton,
  "roofer-marketing:stoke-on-trent": roofer_marketing_stoke_on_trent,
  "roofer-marketing:sunderland": roofer_marketing_sunderland,
  "roofer-marketing:swansea": roofer_marketing_swansea,
  "roofer-marketing:wolverhampton": roofer_marketing_wolverhampton,
  "vet-marketing:aberdeen": vet_marketing_aberdeen,
  "vet-marketing:belfast": vet_marketing_belfast,
  "vet-marketing:birmingham": vet_marketing_birmingham,
  "vet-marketing:bradford": vet_marketing_bradford,
  "vet-marketing:bristol": vet_marketing_bristol,
  "vet-marketing:cardiff": vet_marketing_cardiff,
  "vet-marketing:coventry": vet_marketing_coventry,
  "vet-marketing:derby": vet_marketing_derby,
  "vet-marketing:edinburgh": vet_marketing_edinburgh,
  "vet-marketing:glasgow": vet_marketing_glasgow,
  "vet-marketing:leeds": vet_marketing_leeds,
  "vet-marketing:leicester": vet_marketing_leicester,
  "vet-marketing:liverpool": vet_marketing_liverpool,
  "vet-marketing:london": vet_marketing_london,
  "vet-marketing:manchester": vet_marketing_manchester,
  "vet-marketing:newcastle": vet_marketing_newcastle,
  "vet-marketing:nottingham": vet_marketing_nottingham,
  "vet-marketing:plymouth": vet_marketing_plymouth,
  "vet-marketing:reading": vet_marketing_reading,
  "vet-marketing:sheffield": vet_marketing_sheffield,
  "vet-marketing:southampton": vet_marketing_southampton,
  "vet-marketing:stoke-on-trent": vet_marketing_stoke_on_trent,
  "vet-marketing:sunderland": vet_marketing_sunderland,
  "vet-marketing:swansea": vet_marketing_swansea,
  "vet-marketing:wolverhampton": vet_marketing_wolverhampton,
  "optician-marketing:aberdeen": optician_marketing_aberdeen,
  "optician-marketing:belfast": optician_marketing_belfast,
  "optician-marketing:birmingham": optician_marketing_birmingham,
  "optician-marketing:bradford": optician_marketing_bradford,
  "optician-marketing:bristol": optician_marketing_bristol,
  "optician-marketing:cardiff": optician_marketing_cardiff,
  "optician-marketing:coventry": optician_marketing_coventry,
  "optician-marketing:derby": optician_marketing_derby,
  "optician-marketing:edinburgh": optician_marketing_edinburgh,
  "optician-marketing:glasgow": optician_marketing_glasgow,
  "optician-marketing:leeds": optician_marketing_leeds,
  "optician-marketing:leicester": optician_marketing_leicester,
  "optician-marketing:liverpool": optician_marketing_liverpool,
  "optician-marketing:london": optician_marketing_london,
  "optician-marketing:manchester": optician_marketing_manchester,
  "optician-marketing:newcastle": optician_marketing_newcastle,
  "optician-marketing:nottingham": optician_marketing_nottingham,
  "optician-marketing:plymouth": optician_marketing_plymouth,
  "optician-marketing:reading": optician_marketing_reading,
  "optician-marketing:sheffield": optician_marketing_sheffield,
  "optician-marketing:southampton": optician_marketing_southampton,
  "optician-marketing:stoke-on-trent": optician_marketing_stoke_on_trent,
  "optician-marketing:sunderland": optician_marketing_sunderland,
  "optician-marketing:swansea": optician_marketing_swansea,
  "optician-marketing:wolverhampton": optician_marketing_wolverhampton,
  "physio-marketing:aberdeen": physio_marketing_aberdeen,
  "physio-marketing:belfast": physio_marketing_belfast,
  "physio-marketing:birmingham": physio_marketing_birmingham,
  "physio-marketing:bradford": physio_marketing_bradford,
  "physio-marketing:bristol": physio_marketing_bristol,
  "physio-marketing:cardiff": physio_marketing_cardiff,
  "physio-marketing:coventry": physio_marketing_coventry,
  "physio-marketing:derby": physio_marketing_derby,
  "physio-marketing:edinburgh": physio_marketing_edinburgh,
  "physio-marketing:glasgow": physio_marketing_glasgow,
  "physio-marketing:leeds": physio_marketing_leeds,
  "physio-marketing:leicester": physio_marketing_leicester,
  "physio-marketing:liverpool": physio_marketing_liverpool,
  "physio-marketing:london": physio_marketing_london,
  "physio-marketing:manchester": physio_marketing_manchester,
  "physio-marketing:newcastle": physio_marketing_newcastle,
  "physio-marketing:nottingham": physio_marketing_nottingham,
  "physio-marketing:plymouth": physio_marketing_plymouth,
  "physio-marketing:reading": physio_marketing_reading,
  "physio-marketing:sheffield": physio_marketing_sheffield,
  "physio-marketing:southampton": physio_marketing_southampton,
  "physio-marketing:stoke-on-trent": physio_marketing_stoke_on_trent,
  "physio-marketing:sunderland": physio_marketing_sunderland,
  "physio-marketing:swansea": physio_marketing_swansea,
  "physio-marketing:wolverhampton": physio_marketing_wolverhampton,
  "funeral-marketing:aberdeen": funeral_marketing_aberdeen,
  "funeral-marketing:belfast": funeral_marketing_belfast,
  "funeral-marketing:birmingham": funeral_marketing_birmingham,
  "funeral-marketing:bradford": funeral_marketing_bradford,
  "funeral-marketing:bristol": funeral_marketing_bristol,
  "funeral-marketing:cardiff": funeral_marketing_cardiff,
  "funeral-marketing:coventry": funeral_marketing_coventry,
  "funeral-marketing:derby": funeral_marketing_derby,
  "funeral-marketing:edinburgh": funeral_marketing_edinburgh,
  "funeral-marketing:glasgow": funeral_marketing_glasgow,
  "funeral-marketing:leeds": funeral_marketing_leeds,
  "funeral-marketing:leicester": funeral_marketing_leicester,
  "funeral-marketing:liverpool": funeral_marketing_liverpool,
  "funeral-marketing:london": funeral_marketing_london,
  "funeral-marketing:manchester": funeral_marketing_manchester,
  "funeral-marketing:newcastle": funeral_marketing_newcastle,
  "funeral-marketing:nottingham": funeral_marketing_nottingham,
  "funeral-marketing:plymouth": funeral_marketing_plymouth,
  "funeral-marketing:reading": funeral_marketing_reading,
  "funeral-marketing:sheffield": funeral_marketing_sheffield,
  "funeral-marketing:southampton": funeral_marketing_southampton,
  "funeral-marketing:stoke-on-trent": funeral_marketing_stoke_on_trent,
  "funeral-marketing:sunderland": funeral_marketing_sunderland,
  "funeral-marketing:swansea": funeral_marketing_swansea,
  "funeral-marketing:wolverhampton": funeral_marketing_wolverhampton,
  "solicitor-marketing:aberdeen": solicitor_marketing_aberdeen,
  "solicitor-marketing:belfast": solicitor_marketing_belfast,
  "solicitor-marketing:birmingham": solicitor_marketing_birmingham,
  "solicitor-marketing:bradford": solicitor_marketing_bradford,
  "solicitor-marketing:bristol": solicitor_marketing_bristol,
  "solicitor-marketing:cardiff": solicitor_marketing_cardiff,
  "solicitor-marketing:coventry": solicitor_marketing_coventry,
  "solicitor-marketing:derby": solicitor_marketing_derby,
  "solicitor-marketing:edinburgh": solicitor_marketing_edinburgh,
  "solicitor-marketing:glasgow": solicitor_marketing_glasgow,
  "solicitor-marketing:leeds": solicitor_marketing_leeds,
  "solicitor-marketing:leicester": solicitor_marketing_leicester,
  "solicitor-marketing:liverpool": solicitor_marketing_liverpool,
  "solicitor-marketing:london": solicitor_marketing_london,
  "solicitor-marketing:manchester": solicitor_marketing_manchester,
  "solicitor-marketing:newcastle": solicitor_marketing_newcastle,
  "solicitor-marketing:nottingham": solicitor_marketing_nottingham,
  "solicitor-marketing:plymouth": solicitor_marketing_plymouth,
  "solicitor-marketing:reading": solicitor_marketing_reading,
  "solicitor-marketing:sheffield": solicitor_marketing_sheffield,
  "solicitor-marketing:southampton": solicitor_marketing_southampton,
  "solicitor-marketing:stoke-on-trent": solicitor_marketing_stoke_on_trent,
  "solicitor-marketing:sunderland": solicitor_marketing_sunderland,
  "solicitor-marketing:swansea": solicitor_marketing_swansea,
  "solicitor-marketing:wolverhampton": solicitor_marketing_wolverhampton,
  "accountant-marketing:aberdeen": accountant_marketing_aberdeen,
  "accountant-marketing:belfast": accountant_marketing_belfast,
  "accountant-marketing:birmingham": accountant_marketing_birmingham,
  "accountant-marketing:bradford": accountant_marketing_bradford,
  "accountant-marketing:bristol": accountant_marketing_bristol,
  "accountant-marketing:cardiff": accountant_marketing_cardiff,
  "accountant-marketing:coventry": accountant_marketing_coventry,
  "accountant-marketing:derby": accountant_marketing_derby,
  "accountant-marketing:edinburgh": accountant_marketing_edinburgh,
  "accountant-marketing:glasgow": accountant_marketing_glasgow,
  "accountant-marketing:leeds": accountant_marketing_leeds,
  "accountant-marketing:leicester": accountant_marketing_leicester,
  "accountant-marketing:liverpool": accountant_marketing_liverpool,
  "accountant-marketing:london": accountant_marketing_london,
  "accountant-marketing:manchester": accountant_marketing_manchester,
  "accountant-marketing:newcastle": accountant_marketing_newcastle,
  "accountant-marketing:nottingham": accountant_marketing_nottingham,
  "accountant-marketing:plymouth": accountant_marketing_plymouth,
  "accountant-marketing:reading": accountant_marketing_reading,
  "accountant-marketing:sheffield": accountant_marketing_sheffield,
  "accountant-marketing:southampton": accountant_marketing_southampton,
  "accountant-marketing:stoke-on-trent": accountant_marketing_stoke_on_trent,
  "accountant-marketing:sunderland": accountant_marketing_sunderland,
  "accountant-marketing:swansea": accountant_marketing_swansea,
  "accountant-marketing:wolverhampton": accountant_marketing_wolverhampton,
};

export function getRichComboContent(
  industrySlug: string,
  citySlug: string
): RichComboContent | undefined {
  return COMBO_CONTENT[`${industrySlug}:${citySlug}`];
}
