import {
  IDailyInformation,
  IPercentChangeOverTime,
} from "lib/types/types/home";
import { getSimpleArrayData } from "./utils";

export const getDailyInformation = () =>
  getSimpleArrayData<IDailyInformation, IDailyInformation>(
    "b4a75799-3bc0-4eb5-892c-89e63d117de7",
    "Total Sales Count,Total unique buyers,Total unique sellers,Daily number of unique buyers/sellers,Total Sales Volume in USD,Daily number of sales,Daily Sales volume in USD",
    "Day"
  );

export const getPercentChangeOverTime = () =>
  getSimpleArrayData<IPercentChangeOverTime, IPercentChangeOverTime>(
    "0eee1f28-2cad-4193-9e9f-8b56ffa190e4",
    "The percentage (%) increase/decrease of sales count,The percentage (%) increase/decrease of unique buyers,The percentage (%) increase/decrease unique sellers,The percentage (%) increase/decrease of sales volume",
    "Day"
  );
