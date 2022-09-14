import {
  INFTsWithBiggestImpactSaleVolume,
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
} from "lib/types/types/nftAnalysis";
import { getSimpleArrayData, pivotData } from "./utils";

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

export const getTopNFTWithMostImpactOnSaleVolume = () =>
  getNFTsWithMostImpactOnSalesVolume(
    "ca5ff3a5-8a31-4b15-8789-89145ce41bbe",
    "NFTs who have the biggest impact on daily sales volume"
  );

export const getNFTsWithMostImpactOnSalesVolume = async (
  velocityKey: string,
  title: string
) => {
  const res = await fetch(
    `https://node-api.flipsidecrypto.com/api/v2/queries/${velocityKey}/data/latest`
  );
  const rawData: INFTsWithBiggestImpactSaleVolume[] = await res.json();
  const categories = Array.from(
    new Set(
      rawData.map((item) => {
        return item.Category;
      })
    )
  );
  const salveVolume = pivotData(
    rawData,
    "Day",
    "Category",
    "Total Volume of Sale",
    categories,
    0,
    true
  );
  return {
    data: salveVolume.sort((a, b) =>
      // @ts-ignore
      a["Name"] > b["Name"] ? -1 : 1
    ),
    categories: categories,
    title,
    key: velocityKey,
  };
};
