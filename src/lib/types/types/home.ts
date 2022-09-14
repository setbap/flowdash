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

export interface ITotalInfoCurrentAndChange {
  Day: string;
  "Current Sales Volume": number;
  "Current Unique Sellers": number;
  "Current Unique Buyers": number;
  "Current Sales Count": number;
  "Previous Sales Volume": number;
  "Previous Unique Sellers": number;
  "Previous Unique Buyers": number;
  "Previous Sales Count": number;
  "change (%) Sales Volume": number;
  "change (%) Unique Sellers": number;
  "change (%) Unique Buyers": number;
  "change (%) Sales Count": number;
}
