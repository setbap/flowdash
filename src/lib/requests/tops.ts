import {
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
  ITopPlayerBaseOnNumberSales,
  ITopPlayerBaseOnVolumeSales,
  ITopTeamBaseOnNumberSales,
  ITopTeamBaseOnVolumeSales,
} from "lib/types/types/tops";
import { getSimpleArrayData } from "./utils";

export const getTopNFTVolume = () =>
  getSimpleArrayData<ITopNFTBasedOnVolume, ITopNFTBasedOnVolume>(
    "230ba296-a856-46c2-8108-a93dfa05056b",
    "Top 100 NFT ID based volume of sales ($)",
    "Volume of Sales"
  );

export const getTopNFTIDBaseSaleNumber = () =>
  getSimpleArrayData<ITopNFTIDBaseSaleNumber, ITopNFTIDBaseSaleNumber>(
    "69ae4ec7-ef4a-4fee-a043-3fc0856b277a",
    "Top NFT ID based on number of sales",
    "Number of Sale"
  );

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
