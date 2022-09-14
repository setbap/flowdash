import NFTAnalysis from "lib/pages/nftAnalysis";
import {
  getTopNFTIDBaseSaleNumber,
  getTopNFTVolume,
} from "lib/requests/nftAnalysis";
import { ReturnDataType } from "lib/types/types/base";
import {
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
} from "lib/types/types/nftAnalysis";

export async function getStaticProps() {
  const [topNFTVolume, topNFTIDBaseSaleNumber] = await Promise.all([
    getTopNFTVolume(),
    getTopNFTIDBaseSaleNumber(),
  ]);
  return {
    props: {
      topNFTVolume,
      topNFTIDBaseSaleNumber,
    },
    revalidate: 10 * 60,
  };
}
export type NFTAnalysisProps = {
  topNFTVolume: ReturnDataType<ITopNFTBasedOnVolume[]>;
  topNFTIDBaseSaleNumber: ReturnDataType<ITopNFTIDBaseSaleNumber[]>;
};
export default NFTAnalysis;
