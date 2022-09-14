import {
  ITopTeamBaseOnVolumeSales,
  ITopTeamBaseOnNumberSales,
} from "lib/types/types/teamAnalysis";
import { getNFTsWithMostImpactOnSalesVolume } from "./nftAnalysis";
import { getSimpleArrayData } from "./utils";

export const getTopTeamBaseOnVolumeSales = () =>
  getSimpleArrayData<ITopTeamBaseOnVolumeSales, ITopTeamBaseOnVolumeSales>(
    "7143c2bc-cfca-4489-b24f-bb77f0a05785",
    "Top team based on total volume of sales",
    "Total Volume of Sale"
  );

export const getTopTeamBaseOnNumberSales = () =>
  getSimpleArrayData<ITopTeamBaseOnNumberSales, ITopTeamBaseOnNumberSales>(
    "6e9b4ac4-9cb1-4875-9be6-6fa3d657d6f1",
    "Top team based on number of sales",
    "Number of Sale"
  );

export const getTopTeamWithMostImpactOnSaleVolume = () =>
  getNFTsWithMostImpactOnSalesVolume(
    "4e85987c-5552-4557-bc55-4d53e1a4d6c4",
    "Teams who have the biggest impact on daily sales volume"
  );
