export interface IDailyInformation {
  Day: string;
  "Sales Volume": number;
  "Total Sales Volume": number;
  "AVG Sales Volume": number;
  "Unique Sellers": number;
  "Unique Buyers": number;
  "Total Unique Sellers": number;
  "Total Unique Buyers": number;
  "Sales Count": number;
  "Total Sales Count": number;
}

export interface IPercentChangeOverTime {
  Day: string;
  "Sales Volume": number;
  "Previous Sales Volume": number;
  "change (%) Sales Volume": number;
  "Unique Sellers": number;
  "Previous Unique Sellers": number;
  "change (%) Unique Sellers": number;
  "Unique Buyers": number;
  "Previous Unique Buyers": number;
  "change (%) Unique Buyers": number;
  "Sales Count": number;
  "Previous Sales Count": number;
  "change (%) Sales Count": number;
}
