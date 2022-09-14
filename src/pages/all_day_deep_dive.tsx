import {
  getPlayTypeSaleCountAndSalesVolume,
  getSetNameSaleCountAndSalesVolume,
  getSeriesSaleCountAndSalesVolume,
  getSeasonSaleCountAndSalesVolume,
  getPlayerPositionSaleCountAndSalesVolume,
  getTierSaleCountAndSalesVolume,
} from "lib/requests/allDayDeepDive";
import {
  IPlayerPositionSaleCountAndSalesVolume,
  IPlayTypeSaleCountAndSalesVolume,
  ISeasonSaleCountAndSalesVolume,
  ISeriesSaleCountAndSalesVolume,
  ISetNameSaleCountAndSalesVolume,
  ITierSaleCountAndSalesVolume,
} from "lib/types/types/allDayDeepDive";
import { ReturnDataType } from "lib/types/types/base";
import AllDayDeepDive from "lib/pages/allDayDeepDive";

export async function getStaticProps() {
  const [
    playTypeSaleCountAndSalesVolume,
    setNameSaleCountAndSalesVolume,
    seriesSaleCountAndSalesVolume,
    seasonSaleCountAndSalesVolume,
    playerPositionSaleCountAndSalesVolume,
    tierSaleCountAndSalesVolume,
  ] = await Promise.all([
    getPlayTypeSaleCountAndSalesVolume(),
    getSetNameSaleCountAndSalesVolume(),
    getSeriesSaleCountAndSalesVolume(),
    getSeasonSaleCountAndSalesVolume(),
    getPlayerPositionSaleCountAndSalesVolume(),
    getTierSaleCountAndSalesVolume(),
  ]);
  return {
    props: {
      playTypeSaleCountAndSalesVolume,
      setNameSaleCountAndSalesVolume,
      seriesSaleCountAndSalesVolume,
      seasonSaleCountAndSalesVolume,
      playerPositionSaleCountAndSalesVolume,
      tierSaleCountAndSalesVolume,
    },
    revalidate: 10 * 60,
  };
}
export type AllDayDeepDiveProps = {
  playTypeSaleCountAndSalesVolume: ReturnDataType<
    IPlayTypeSaleCountAndSalesVolume[]
  >;
  setNameSaleCountAndSalesVolume: ReturnDataType<
    ISetNameSaleCountAndSalesVolume[]
  >;
  seriesSaleCountAndSalesVolume: ReturnDataType<
    ISeriesSaleCountAndSalesVolume[]
  >;
  seasonSaleCountAndSalesVolume: ReturnDataType<
    ISeasonSaleCountAndSalesVolume[]
  >;
  playerPositionSaleCountAndSalesVolume: ReturnDataType<
    IPlayerPositionSaleCountAndSalesVolume[]
  >;
  tierSaleCountAndSalesVolume: ReturnDataType<ITierSaleCountAndSalesVolume[]>;
};
export default AllDayDeepDive;
