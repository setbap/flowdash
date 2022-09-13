import { Box, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
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
      <Box mx={"auto"} px={{ base: 6, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            rotate="180deg"
            top="-20%"
            comment="Test"
            title={dailyInformation.title.split(",")[0]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Sales Count"]}
            status={"dec"}
          />

          <StatsCard
            title={dailyInformation.title.split(",")[1]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Unique Buyers"]}
            status={"inc"}
          />

          <StatsCard
            title={dailyInformation.title.split(",")[2]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Unique Sellers"]}
            status={"inc"}
          />

          <StatsCard
            title={dailyInformation.title.split(",")[4]}
            link={dailyInformation.key}
            stat={dailyInformation.data[0]["Total Sales Volume"]}
            status={"inc"}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          {/* start  */}
          <BarGraph
            seprateNegetive
            isNotDate
            queryLink={percentChangeOverTime.key}
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[0]}
            dataKey="Month"
            baseSpan={3}
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
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[1]}
            dataKey="Month"
            baseSpan={3}
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
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[2]}
            dataKey="Month"
            baseSpan={3}
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
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
            values={percentChangeOverTime.data}
            title={percentChangeOverTime.title.split(",")[3]}
            dataKey="Month"
            baseSpan={3}
            oyLabel="% change"
            oxLabel=""
            labels={[
              {
                key: "change (%) Sales Volume",
                color: colors[3],
              },
            ]}
          />

          {/* end */}

          <StackedAreaChart
            queryLink={dailyInformation.key}
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
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
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
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
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
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
            modalInfo={`
## Test

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
            `}
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
