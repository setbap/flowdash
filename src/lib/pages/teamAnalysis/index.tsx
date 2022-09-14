import { Box, SimpleGrid } from "@chakra-ui/react";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { TeamAnalysisProps } from "pages/team_analysis";
import BarGraph from "lib/components/charts/BarGraph";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";

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

const TeamAnalysis = ({
  topTeamBaseOnVolumeSales,
  topTeamBaseOnNumberSales,
}: TeamAnalysisProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} Tops | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
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
            queryLink={topTeamBaseOnVolumeSales.key}
            data={topTeamBaseOnVolumeSales.data}
            title={topTeamBaseOnVolumeSales.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Volume of Sale"}
            lineDataKey={"Average price of Sale"}
            modalInfo={""}
            xAxisDataKey={"Team"}
          />
          <BarGraph
            queryLink={topTeamBaseOnNumberSales.key}
            values={topTeamBaseOnNumberSales.data}
            title={topTeamBaseOnNumberSales.title}
            baseSpan={3}
            isNotDate
            dataKey={"Team"}
            modalInfo={""}
            oxLabel={""}
            oyLabel={"sale count"}
            labels={[
              {
                key: "Number of Sale",
                color: colors[5],
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default TeamAnalysis;
