import { Box, SimpleGrid } from "@chakra-ui/react";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { PlayerAnalysisProps } from "pages/player_analysis";
import BarGraph from "lib/components/charts/BarGraph";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { AllDayDeepDiveProps } from "pages/all_day_deep_dive";
const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const PlayerAnalysis = ({
  playTypeSaleCountAndSalesVolume,
  setNameSaleCountAndSalesVolume,
  seriesSaleCountAndSalesVolume,
  seasonSaleCountAndSalesVolume,
  playerPositionSaleCountAndSalesVolume,
  tierSaleCountAndSalesVolume,
}: AllDayDeepDiveProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} All Day Deep Dive | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
        description="Track the latest stats and trends on ${names.BLOCKCHAIN}"
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `${names.APP_NAME} | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 6, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        ></SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <LineChartWithBar
            queryLink={playTypeSaleCountAndSalesVolume.key}
            data={playTypeSaleCountAndSalesVolume.data}
            title={playTypeSaleCountAndSalesVolume.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Sales Volume"}
            lineDataKey={"Total Sales Count"}
            modalInfo={""}
            xAxisDataKey={"Play Type"}
          />
          <LineChartWithBar
            queryLink={setNameSaleCountAndSalesVolume.key}
            data={setNameSaleCountAndSalesVolume.data}
            title={setNameSaleCountAndSalesVolume.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Sales Volume"}
            lineDataKey={"Total Sales Count"}
            modalInfo={""}
            xAxisDataKey={"Set Name"}
          />
          <LineChartWithBar
            queryLink={seriesSaleCountAndSalesVolume.key}
            data={seriesSaleCountAndSalesVolume.data}
            title={seriesSaleCountAndSalesVolume.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Sales Volume"}
            lineDataKey={"Total Sales Count"}
            modalInfo={""}
            xAxisDataKey={"Series"}
          />
          <LineChartWithBar
            queryLink={seasonSaleCountAndSalesVolume.key}
            data={seasonSaleCountAndSalesVolume.data}
            title={seasonSaleCountAndSalesVolume.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Sales Volume"}
            lineDataKey={"Total Sales Count"}
            modalInfo={""}
            xAxisDataKey={"Season"}
          />
          <LineChartWithBar
            queryLink={playerPositionSaleCountAndSalesVolume.key}
            data={playerPositionSaleCountAndSalesVolume.data}
            title={playerPositionSaleCountAndSalesVolume.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Sales Volume"}
            lineDataKey={"Total Sales Count"}
            modalInfo={""}
            xAxisDataKey={"Player Position"}
          />
          <LineChartWithBar
            queryLink={tierSaleCountAndSalesVolume.key}
            data={tierSaleCountAndSalesVolume.data}
            title={tierSaleCountAndSalesVolume.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Sales Volume"}
            lineDataKey={"Total Sales Count"}
            modalInfo={""}
            xAxisDataKey={"Tier"}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default PlayerAnalysis;
