export interface INFTsInformation {
  "NFT ID": number;
  Tier: string;
  "Player Name": string;
  "Player Position": string;
  "Team Name": string;
  "Away Team Name": string;
  Season: number;
  Week: number;
  "Moment Date": string;
  Series: string;
  "Set Name": string;
  Classification: string;
  "Play Type": string;
  "Average Sales $": number;
  "Top Sales $": number;
  "Minimum Sales $": number;
}

export interface INFTSaleInformation {
  timestamp: string;
  "tx id": string;
  "buyer wallet": string;
  "seller wallet": string;
  price: number;
}

export interface NFT_METADATA {
  serial_number: number;
  moment_tier: string;
  total_circulation: number;
  moment_description: string;
  player: string;
  team: string;
  season: string;
  week: string;
  classification: string;
  play_type: string;
  moment_date: string;
  series: string;
  set_name: string;
}
export const metadata_name = [
  "serial_number",
  "moment_tier",
  "total_circulation",
  "player",
  "team",
  "season",
  "week",
  "classification",
  "play_type",
  "moment_date",
  "series",
  "set_name",
];
