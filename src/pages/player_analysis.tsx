import PlayerAnalysis from "lib/pages/playerAnalysis";
import {
  getTopPlayerBaseOnVolumeSales,
  getTopPlayerBaseOnNumberSales,
} from "lib/requests/playerAnalysis";
import { ReturnDataType } from "lib/types/types/base";
import {
  ITopPlayerBaseOnVolumeSales,
  ITopPlayerBaseOnNumberSales,
} from "lib/types/types/playerAnalysis";

export async function getStaticProps() {
  const [topPlayerBaseOnVolumeSales, topPlayerBaseOnNumberSales] =
    await Promise.all([
      getTopPlayerBaseOnVolumeSales(),
      getTopPlayerBaseOnNumberSales(),
    ]);
  return {
    props: {
      topPlayerBaseOnVolumeSales,
      topPlayerBaseOnNumberSales,
    },
    revalidate: 10 * 60,
  };
}
export type PlayerAnalysisProps = {
  topPlayerBaseOnVolumeSales: ReturnDataType<ITopPlayerBaseOnVolumeSales[]>;
  topPlayerBaseOnNumberSales: ReturnDataType<ITopPlayerBaseOnNumberSales[]>;
};
export default PlayerAnalysis;
