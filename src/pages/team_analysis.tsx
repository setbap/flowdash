import TeamAnalysis from "lib/pages/teamAnalysis";
import {
  getTopTeamBaseOnVolumeSales,
  getTopTeamBaseOnNumberSales,
  getTopTeamWithMostImpactOnSaleVolume,
} from "lib/requests/teamAnalysis";

import { ReturnDataType } from "lib/types/types/base";
import {
  ITopTeamBaseOnVolumeSales,
  ITopTeamBaseOnNumberSales,
} from "lib/types/types/teamAnalysis";

export async function getStaticProps() {
  const [
    topTeamBaseOnVolumeSales,
    topTeamBaseOnNumberSales,
    topTeamWithMostImpactOnSaleVolume,
  ] = await Promise.all([
    getTopTeamBaseOnVolumeSales(),
    getTopTeamBaseOnNumberSales(),
    getTopTeamWithMostImpactOnSaleVolume(),
  ]);
  return {
    props: {
      topTeamBaseOnVolumeSales,
      topTeamBaseOnNumberSales,
      topTeamWithMostImpactOnSaleVolume,
    },
    revalidate: 10 * 60,
  };
}
export type TeamAnalysisProps = {
  topTeamBaseOnVolumeSales: ReturnDataType<ITopTeamBaseOnVolumeSales[]>;
  topTeamBaseOnNumberSales: ReturnDataType<ITopTeamBaseOnNumberSales[]>;
  topTeamWithMostImpactOnSaleVolume: {
    data: {
      Name: string;
    }[];
    categories: string[];
    title: string;
    key: string;
  };
};
export default TeamAnalysis;
