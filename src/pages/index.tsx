import Home from "lib/pages/home";
import {
  getDailyInformation,
  getPercentChangeOverTime,
  getTotalInfoCurrentAndChanges,
} from "lib/requests/home";
import { ReturnDataType } from "lib/types/types/base";
import {
  IDailyInformation,
  IPercentChangeOverTime,
  ITotalInfoCurrentAndChange,
} from "lib/types/types/home";
export async function getStaticProps() {
  const [dailyInformation, percentChangeOverTime, totalInfoCurrentAndChanges] =
    await Promise.all([
      getDailyInformation(),
      getPercentChangeOverTime(),
      getTotalInfoCurrentAndChanges(),
    ]);
  return {
    props: {
      dailyInformation,
      percentChangeOverTime,
      totalInfoCurrentAndChanges,
    },
    revalidate: 10 * 60,
  };
}
export type HomeProps = {
  dailyInformation: ReturnDataType<IDailyInformation[]>;
  percentChangeOverTime: ReturnDataType<IPercentChangeOverTime[]>;
  totalInfoCurrentAndChanges: ReturnDataType<ITotalInfoCurrentAndChange[]>;
};
export default Home;
