import {
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
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
