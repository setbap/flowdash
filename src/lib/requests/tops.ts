import { ITopNFTBasedOnVolume } from "lib/types/types/tops";
import { getSimpleArrayData } from "./utils";

export const getTopNFTVolume = () =>
  getSimpleArrayData<ITopNFTBasedOnVolume, ITopNFTBasedOnVolume>(
    "230ba296-a856-46c2-8108-a93dfa05056b",
    "Top 100 NFT ID based volume of sales ($)",
    "Volume of Sales"
  );
