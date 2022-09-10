import Home from "lib/pages/home";
import {
  getDailyInformation,
  getPercentChangeOverTime,
} from "lib/requests/home";
import { ReturnDataType } from "lib/types/types/base";
import {
  IDailyInformation,
  IPercentChangeOverTime,
} from "lib/types/types/home";
export async function getStaticProps() {
  const [dailyInformation, percentChangeOverTime] = await Promise.all([
    getDailyInformation(),
    getPercentChangeOverTime(),
  ]);
  return {
    props: { dailyInformation, percentChangeOverTime },
    revalidate: 10 * 60,
  };
}
export type HomeProps = {
  dailyInformation: ReturnDataType<IDailyInformation[]>;
  percentChangeOverTime: ReturnDataType<IPercentChangeOverTime[]>;
};
export default Home;
