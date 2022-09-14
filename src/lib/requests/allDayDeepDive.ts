import {
  IPlayTypeSaleCountAndSalesVolume,
  ISetNameSaleCountAndSalesVolume,
  ISeriesSaleCountAndSalesVolume,
  ISeasonSaleCountAndSalesVolume,
  IPlayerPositionSaleCountAndSalesVolume,
  ITierSaleCountAndSalesVolume,
} from "lib/types/types/allDayDeepDive";
import { getSimpleArrayData } from "./utils";

export const getPlayTypeSaleCountAndSalesVolume = () =>
  getSimpleArrayData<
    IPlayTypeSaleCountAndSalesVolume,
    IPlayTypeSaleCountAndSalesVolume
  >(
    "a1d61df0-b7c6-4b06-b41c-e8fbbf4093f4",
    "Play type analysis: based on Sales count and Sales volume"
  );

export const getSetNameSaleCountAndSalesVolume = () =>
  getSimpleArrayData<
    ISetNameSaleCountAndSalesVolume,
    ISetNameSaleCountAndSalesVolume
  >(
    "f978d313-2915-4715-8fb8-23b313c7efa0",
    "Set name analysis: based on Sales count and Sales volume"
  );
export const getSeriesSaleCountAndSalesVolume = () =>
  getSimpleArrayData<
    ISeriesSaleCountAndSalesVolume,
    ISeriesSaleCountAndSalesVolume
  >(
    "3044e232-4301-4323-ba18-23ba77a54f31",
    "Series analysis: based on Sales count and Sales volume"
  );
export const getSeasonSaleCountAndSalesVolume = () =>
  getSimpleArrayData<
    ISeasonSaleCountAndSalesVolume,
    ISeasonSaleCountAndSalesVolume
  >(
    "458fc838-f626-458b-a320-dc035e4f5a70",
    "Season analysis: based on Sales count and Sales volume"
  );
export const getPlayerPositionSaleCountAndSalesVolume = () =>
  getSimpleArrayData<
    IPlayerPositionSaleCountAndSalesVolume,
    IPlayerPositionSaleCountAndSalesVolume
  >(
    "cdbccf26-369c-42a8-93c4-eb62c51554a2",
    "Player position analysis: based on Sales count and Sales volume"
  );
export const getTierSaleCountAndSalesVolume = () =>
  getSimpleArrayData<
    ITierSaleCountAndSalesVolume,
    ITierSaleCountAndSalesVolume
  >(
    "d56e8d40-9aab-45d2-8ff7-1135d7afa279",
    "Tier analysis: based on Sales count and Sales volume"
  );
