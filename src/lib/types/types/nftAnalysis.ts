export interface ITopNFTIDBaseSaleNumber {
  Id: number;
  "Number of Sale": number;
}

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

export interface INFTsWithBiggestImpactSaleVolume {
  Day: string;
  Category: string;
  "Total Volume of Sale": number;
}
