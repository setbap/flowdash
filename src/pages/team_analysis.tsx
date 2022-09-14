import TeamAnalysis from "lib/pages/teamAnalysis";
import {
  getTopTeamBaseOnVolumeSales,
  getTopTeamBaseOnNumberSales,
} from "lib/requests/teamAnalysis";

import { ReturnDataType } from "lib/types/types/base";
import {
  ITopTeamBaseOnVolumeSales,
  ITopTeamBaseOnNumberSales,
} from "lib/types/types/teamAnalysis";

export async function getStaticProps() {
  const [topTeamBaseOnVolumeSales, topTeamBaseOnNumberSales] =
    await Promise.all([
      getTopTeamBaseOnVolumeSales(),
      getTopTeamBaseOnNumberSales(),
    ]);
  return {
    props: {
      topTeamBaseOnVolumeSales,
      topTeamBaseOnNumberSales,
    },
    revalidate: 10 * 60,
  };
}
export type TeamAnalysisProps = {
  topTeamBaseOnVolumeSales: ReturnDataType<ITopTeamBaseOnVolumeSales[]>;
  topTeamBaseOnNumberSales: ReturnDataType<ITopTeamBaseOnNumberSales[]>;
};
export default TeamAnalysis;
