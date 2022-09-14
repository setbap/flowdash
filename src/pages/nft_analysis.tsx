import NFTAnalysis from "lib/pages/nftAnalysis";
import {
  getTopNFTIDBaseSaleNumber,
  getTopNFTVolume,
  getTopNFTWithMostImpactOnSaleVolume,
} from "lib/requests/nftAnalysis";
import { ReturnDataType } from "lib/types/types/base";
import {
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
} from "lib/types/types/nftAnalysis";

export async function getStaticProps() {
  const [
    topNFTVolume,
    topNFTIDBaseSaleNumber,
    topNFTWithMostImpactOnSaleVolume,
  ] = await Promise.all([
    getTopNFTVolume(),
    getTopNFTIDBaseSaleNumber(),
    getTopNFTWithMostImpactOnSaleVolume(),
  ]);
  return {
    props: {
      topNFTVolume,
      topNFTIDBaseSaleNumber,
      topNFTWithMostImpactOnSaleVolume,
    },
    revalidate: 10 * 60,
  };
}
export type NFTAnalysisProps = {
  topNFTVolume: ReturnDataType<ITopNFTBasedOnVolume[]>;
  topNFTIDBaseSaleNumber: ReturnDataType<ITopNFTIDBaseSaleNumber[]>;
  topNFTWithMostImpactOnSaleVolume: {
    data: {
      Name: string;
    }[];
    categories: string[];
    title: string;
    key: string;
  };
};
export default NFTAnalysis;
