import PlayerAnalysis from "lib/pages/playerAnalysis";
import {
  getTopPlayerBaseOnVolumeSales,
  getTopPlayerBaseOnNumberSales,
  getTopPlayerWithMostImpactOnSaleVolume,
} from "lib/requests/playerAnalysis";
import { ReturnDataType } from "lib/types/types/base";
import {
  ITopPlayerBaseOnVolumeSales,
  ITopPlayerBaseOnNumberSales,
} from "lib/types/types/playerAnalysis";

export async function getStaticProps() {
  const [
    topPlayerBaseOnVolumeSales,
    topPlayerBaseOnNumberSales,
    topPlayerWithMostImpactOnSaleVolume,
  ] = await Promise.all([
    getTopPlayerBaseOnVolumeSales(),
    getTopPlayerBaseOnNumberSales(),
    getTopPlayerWithMostImpactOnSaleVolume(),
  ]);
  return {
    props: {
      topPlayerBaseOnVolumeSales,
      topPlayerBaseOnNumberSales,
      topPlayerWithMostImpactOnSaleVolume,
    },
    revalidate: 10 * 60,
  };
}
export type PlayerAnalysisProps = {
  topPlayerBaseOnVolumeSales: ReturnDataType<ITopPlayerBaseOnVolumeSales[]>;
  topPlayerBaseOnNumberSales: ReturnDataType<ITopPlayerBaseOnNumberSales[]>;
  topPlayerWithMostImpactOnSaleVolume: {
    data: {
      Name: string;
    }[];
    categories: string[];
    title: string;
    key: string;
  };
};
export default PlayerAnalysis;
