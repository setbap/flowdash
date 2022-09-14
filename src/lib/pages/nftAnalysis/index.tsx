import { Box, SimpleGrid } from "@chakra-ui/react";
import { ITopNFTBasedOnVolume } from "lib/types/types/nftAnalysis";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { NFTAnalysisProps } from "pages/nft_analysis";
import { ColumnDef } from "@tanstack/react-table";
import TableBox from "lib/components/charts/TableBox";
import BarGraph from "lib/components/charts/BarGraph";
import TableModalButton from "lib/components/basic/TableModalButton";

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

const colDef: ColumnDef<ITopNFTBasedOnVolume>[] = [
  {
    accessorFn: (row) => row.ID,
    enableSorting: false,
    id: "ID",
    cell: (info) => info.getValue(),
    header: () => <span>ID</span>,
  },
  {
    accessorFn: (row) => row["Volume of Sales"],
    id: "Volume of Sales",
    cell: (info) => info.getValue(),
    header: () => <span>Volume of Sales</span>,
  },
  {
    accessorFn: (row) => row["Player"],
    id: "Player",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Team"],
    id: "Team",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["Week"],
    id: "Week",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Season"],
    id: "Season",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Moment Description"],
    id: "Describe",
    enableSorting: false,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    cell: (info) => (
      <TableModalButton
        modalTitle="Moment Description"
        value={info.getValue() as string}
      />
    ),
    header: (props) => <span>{props.header.id}</span>,
  },
];

const NFTAnalysis = ({
  topNFTVolume,
  topNFTIDBaseSaleNumber,
  topNFTWithMostImpactOnSaleVolume,
}: NFTAnalysisProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} NFT Analysis | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
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
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={topNFTVolume.key}
            title={topNFTVolume.title}
            baseSpan={3}
            modalInfo={``}
            data={topNFTVolume.data}
            columnsDef={colDef}
          />
          <BarGraph
            queryLink={topNFTIDBaseSaleNumber.key}
            modalInfo={``}
            values={topNFTIDBaseSaleNumber.data}
            title={topNFTIDBaseSaleNumber.title}
            dataKey="Id"
            baseSpan={3}
            isNotDate
            oyLabel="Sales Count"
            oxLabel="Dapps Name"
            infoSizePercentage={"full"}
            labels={[
              {
                key: "Number of Sale",
                color: colors[0],
              },
            ]}
          />
          <BarGraph
            queryLink={topNFTWithMostImpactOnSaleVolume.key}
            modalInfo={""}
            values={topNFTWithMostImpactOnSaleVolume.data}
            title={topNFTWithMostImpactOnSaleVolume.title}
            dataKey="Name"
            hideLegend
            baseSpan={3}
            isNotDate
            oyLabel="Sales Count"
            oxLabel=""
            infoSizePercentage={"full"}
            labels={topNFTWithMostImpactOnSaleVolume.categories.map(
              (item, index) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NFTAnalysis;
