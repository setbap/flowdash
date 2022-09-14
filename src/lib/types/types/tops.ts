export interface ITopNFTBasedOnVolume {
  ID: string;
  "Volume of Sales": number;
  "Moment Description": string;
  Player: string;
  Team: string;
  Season: number;
  Week: number;
  "Video Link": string;
}

export interface ITopNFTIDBaseSaleNumber {
  Id: number;
  "Number of Sale": number;
}

export interface ITopPlayerBaseOnVolumeSales {
  "Player Name": string;
  Team: string;
  "Player - Team": string;
  "Total Volume of Sale": number;
  "Average price of Sale": number;
}

export interface ITopPlayerBaseOnNumberSales {
  "Player Name": string;
  Team: string;
  "Player - Team": string;
  "Number of Sale": number;
}

export interface ITopTeamBaseOnVolumeSales {
  Team: string;
  "Total Volume of Sale": number;
  "Average price of Sale": number;
}

export interface ITopTeamBaseOnNumberSales {
  Team: string;
  "Number of Sale": number;
}
