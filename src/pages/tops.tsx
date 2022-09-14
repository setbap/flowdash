import Tops from "lib/pages/tops";
import {
  getTopNFTIDBaseSaleNumber,
  getTopNFTVolume,
  getTopPlayerBaseOnNumberSales,
  getTopPlayerBaseOnVolumeSales,
  getTopTeamBaseOnNumberSales,
  getTopTeamBaseOnVolumeSales,
} from "lib/requests/tops";
import { ReturnDataType } from "lib/types/types/base";
import {
  ITopNFTBasedOnVolume,
  ITopNFTIDBaseSaleNumber,
  ITopPlayerBaseOnNumberSales,
  ITopPlayerBaseOnVolumeSales,
  ITopTeamBaseOnNumberSales,
  ITopTeamBaseOnVolumeSales,
} from "lib/types/types/tops";
export async function getStaticProps() {
  const [
    topNFTVolume,
    topNFTIDBaseSaleNumber,
    topPlayerBaseOnVolumeSales,
    topPlayerBaseOnNumberSales,
    topTeamBaseOnVolumeSales,
    topTeamBaseOnNumberSales,
  ] = await Promise.all([
    getTopNFTVolume(),
    getTopNFTIDBaseSaleNumber(),
    getTopPlayerBaseOnVolumeSales(),
    getTopPlayerBaseOnNumberSales(),
    getTopTeamBaseOnVolumeSales(),
    getTopTeamBaseOnNumberSales(),
  ]);
  return {
    props: {
      topNFTVolume,
      topNFTIDBaseSaleNumber,
      topPlayerBaseOnVolumeSales,
      topPlayerBaseOnNumberSales,
      topTeamBaseOnVolumeSales,
      topTeamBaseOnNumberSales,
    },
    revalidate: 10 * 60,
  };
}
export type TopsProps = {
  topNFTVolume: ReturnDataType<ITopNFTBasedOnVolume[]>;
  topNFTIDBaseSaleNumber: ReturnDataType<ITopNFTIDBaseSaleNumber[]>;
  topPlayerBaseOnVolumeSales: ReturnDataType<ITopPlayerBaseOnVolumeSales[]>;
  topPlayerBaseOnNumberSales: ReturnDataType<ITopPlayerBaseOnNumberSales[]>;
  topTeamBaseOnVolumeSales: ReturnDataType<ITopTeamBaseOnVolumeSales[]>;
  topTeamBaseOnNumberSales: ReturnDataType<ITopTeamBaseOnNumberSales[]>;
};
export default Tops;
