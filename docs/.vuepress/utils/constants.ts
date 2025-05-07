export type CampaignKey = 'open-skies' | 'blood-and-ash';

export const campaignNames: Record<CampaignKey, string> = {
  'open-skies': 'Open Skies',
  'blood-and-ash': 'Blood & Ash'
}

export const otherCampaigns: Record<CampaignKey, CampaignKey> = {
  'open-skies': 'blood-and-ash',
  'blood-and-ash': 'open-skies'
}
