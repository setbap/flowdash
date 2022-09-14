import {
  ITopPlayerBaseOnVolumeSales,
  ITopPlayerBaseOnNumberSales,
} from "lib/types/types/playerAnalysis";
import { getSimpleArrayData } from "./utils";

export const getTopPlayerBaseOnVolumeSales = () =>
  getSimpleArrayData<ITopPlayerBaseOnVolumeSales, ITopPlayerBaseOnVolumeSales>(
    "47f79770-4de0-4517-9e5b-d3a2612614ba",
    "Top player based on total volume of sales",
    "Total Volume of Sale"
  );

export const getTopPlayerBaseOnNumberSales = () =>
  getSimpleArrayData<ITopPlayerBaseOnNumberSales, ITopPlayerBaseOnNumberSales>(
    "97799a60-e05a-4aca-b173-6f9288bc9af2",
    "Top players based on number of sales",
    "Number of Sale"
  );
