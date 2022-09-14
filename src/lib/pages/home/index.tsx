import { Box, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
import TextBox from "lib/components/charts/TextBox";
import {} from "lib/types/types/home";
import names from "lib/utility/names";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { HomeProps } from "pages";

const CalendarChart: any = dynamic(
  () => import("../../components/charts/CalendarChart"),
  { ssr: false }
);

const FlowChart: any = dynamic(
  () => import("../../components/charts/FlowChart"),
  { ssr: false }
);

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

const Governance = ({
  dailyInformation,
  percentChangeOverTime,
  totalInfoCurrentAndChanges,
}: HomeProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME}  | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
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
      <Box mx={"auto"} my={"6"} px={{ base: 6, sm: 2, md: 8 }}>
        <TextBox>
          {`
The National Football League (NFL) is a professional American football league that consists of 32 teams, divided equally between the American Football Conference (AFC) and the National Football Conference (NFC). The NFL is one of the major North American professional sports leagues and the highest professional level of American football in the world.
The National Football League (NFL), the NFL Players Association (NFLPA), and Dapper Labs Inc. Aug 18th announced that NFL ALL DAY -- the exclusive digital video highlight NFT platform -- is officially open and available to fans worldwide, just ahead of the 2022 NFL season.
`}
        </TextBox>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            hasArrowIcon={false}
            title={dailyInformation.title.split(",")[0]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Sales Count"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={false}
            title={dailyInformation.title.split(",")[1]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Unique Buyers"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={false}
            title={dailyInformation.title.split(",")[2]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Unique Sellers"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={false}
            title={dailyInformation.title.split(",")[4]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Sales Volume"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={totalInfoCurrentAndChanges.title.split(",")[0]}
            link={totalInfoCurrentAndChanges.key}
            stat={totalInfoCurrentAndChanges.data[0]["Current Sales Volume"]}
            change={
              totalInfoCurrentAndChanges.data[0]["change (%) Sales Volume"]
            }
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={totalInfoCurrentAndChanges.title.split(",")[1]}
            link={totalInfoCurrentAndChanges.key}
            stat={totalInfoCurrentAndChanges.data[0]["Current Unique Sellers"]}
            change={
              totalInfoCurrentAndChanges.data[0]["change (%) Unique Sellers"]
            }
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={totalInfoCurrentAndChanges.title.split(",")[2]}
            link={totalInfoCurrentAndChanges.key}
            stat={totalInfoCurrentAndChanges.data[0]["Current Unique Buyers"]}
            change={
              totalInfoCurrentAndChanges.data[0]["change (%) Unique Buyers"]
            }
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={totalInfoCurrentAndChanges.title.split(",")[3]}
            link={totalInfoCurrentAndChanges.key}
            stat={totalInfoCurrentAndChanges.data[0]["Current Sales Count"]}
            change={
              totalInfoCurrentAndChanges.data[0]["change (%) Sales Count"]
            }
            status={"inc"}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pb={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <TextBox>
            {`
These kinds of charts show the percentage of the monthly change in each metric.
You can now see how unique buyers, unique sellers, sales count, and sales volume changed from month to month.
red bars show negative changes and green ones show positive changes.
`}
          </TextBox>
          <BarGraph
            seprateNegetive
            isNotDate
            queryLink={percentChangeOverTime.key}
            modalInfo={``}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[0]}
            dataKey="Month"
            baseSpan={2}
            oyLabel="% change"
            oxLabel=""
            labels={[
              {
                key: "change (%) Sales Count",
                color: colors[3],
              },
            ]}
          />

          <BarGraph
            seprateNegetive
            isNotDate
            queryLink={percentChangeOverTime.key}
            modalInfo={``}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[1]}
            dataKey="Month"
            baseSpan={1}
            oyLabel="% change"
            oxLabel=""
            labels={[
              {
                key: "change (%) Unique Buyers",
                color: colors[3],
              },
            ]}
          />

          <BarGraph
            seprateNegetive
            isNotDate
            queryLink={percentChangeOverTime.key}
            modalInfo={``}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[2]}
            dataKey="Month"
            baseSpan={1}
            oyLabel="% change"
            oxLabel=""
            labels={[
              {
                key: "change (%) Unique Sellers",
                color: colors[3],
              },
            ]}
          />

          <BarGraph
            seprateNegetive
            isNotDate
            queryLink={percentChangeOverTime.key}
            modalInfo={``}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[3]}
            dataKey="Month"
            baseSpan={2}
            oyLabel="% change"
            oxLabel=""
            labels={[
              {
                key: "change (%) Sales Volume",
                color: colors[3],
              },
            ]}
          />

          <StackedAreaChart
            queryLink={dailyInformation.key}
            modalInfo={`
###  Daily number of unique buyers/sellers

Usually, if the unique sellers are much more than the buyers, shows someone or some group is buying NFT and cleaning market from the sellers. This action usually increases the floor price of NFT. in the other hand,  if the unique buyers are much more than sellers could mean someone or some groups tried to dump the NFT price. Anyway, this chart should be used with other data and don't analyzed alone.
            `}
            values={dailyInformation.data}
            title={dailyInformation.title.split(",")[3]}
            dataKey="Day"
            infoSizePercentage={"full"}
            baseSpan={3}
            oyLabel="Count"
            oxLabel=""
            labels={[
              {
                key: "Unique Sellers",
                color: colors[3],
              },
              {
                key: "Unique Buyers",
                color: colors[0],
              },
            ]}
          />

          <BarGraph
            queryLink={dailyInformation.key}
            modalInfo={``}
            values={dailyInformation.data}
            title={dailyInformation.title.split(",")[5]}
            dataKey="Day"
            baseSpan={3}
            infoSizePercentage={"full"}
            oyLabel="Count"
            oxLabel=""
            labels={[
              {
                key: "Sales Count",
                color: colors[2],
              },
            ]}
          />
          <CalendarChart
            disclaimer={"darker color has more value"}
            queryLink={dailyInformation.key}
            modalInfo={``}
            years={[2022]}
            data={dailyInformation.data}
            title={dailyInformation.title.split(",")[5]}
            tooltipTitle=""
            infoSizePercentage={"full"}
            baseSpan={3}
            areaDataKey="Sales Count"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            showSeprate
            customColor={colors[1]}
            barColor={colors[3]}
            queryLink={dailyInformation.key}
            modalInfo={``}
            data={dailyInformation.data}
            title={dailyInformation.title.split(",")[6]}
            baseSpan={3}
            infoSizePercentage={"full"}
            barDataKey="Sales Volume"
            lineDataKey="AVG Sales Volume"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
