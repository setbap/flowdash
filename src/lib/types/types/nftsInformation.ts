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
