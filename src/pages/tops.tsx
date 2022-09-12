import Tops from "lib/pages/tops";
import { getTopNFTIDBaseSaleNumber, getTopNFTVolume } from "lib/requests/tops";
import { ReturnDataType } from "lib/types/types/base";
import {
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
} from "lib/types/types/tops";
export async function getStaticProps() {
  const [topNFTVolume, topNFTIDBaseSaleNumber] = await Promise.all([
    getTopNFTVolume(),
    getTopNFTIDBaseSaleNumber(),
  ]);
  return {
    props: { topNFTVolume, topNFTIDBaseSaleNumber },
    revalidate: 10 * 60,
  };
}
export type TopsProps = {
  topNFTVolume: ReturnDataType<ITopNFTBasedOnVolume[]>;
  topNFTIDBaseSaleNumber: ReturnDataType<ITopNFTIDBaseSaleNumber[]>;
};
export default Tops;
