import {
  Box,
  Button,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { ITopNFTBasedOnVolume } from "lib/types/types/tops";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { TopsProps } from "pages/tops";
import { ColumnDef } from "@tanstack/react-table";
import { ShowTable } from "lib/components/charts/ShowTable";
import TableBox from "lib/components/charts/TableBox";
import BarGraph from "lib/components/charts/BarGraph";
import TableModalButton from "lib/components/basic/TableModalButton";
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

const Governance = ({
  topNFTVolume,
  topNFTIDBaseSaleNumber,
  topPlayerBaseOnVolumeSales,
  topPlayerBaseOnNumberSales,
  topTeamBaseOnVolumeSales,
  topTeamBaseOnNumberSales,
}: TopsProps): JSX.Element => {
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
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={topNFTVolume.key}
            title={topNFTVolume.title}
            baseSpan={3}
            modalInfo={`
## modal info

It’s a know fact that a reader will be distracted by readable text when looking at any type of layout. Because of this, the printing and typesetting industry uses lorem ipsum. Lorem ipsum is a dummy language used as filler text since the 1500s.
`}
            data={topNFTVolume.data}
            columnsDef={colDef}
          />
          <BarGraph
            queryLink={topNFTIDBaseSaleNumber.key}
            modalInfo={`
## modal info

Assumenda photo booth excepteur adipisicing scenester PBR. Swag id 8-bit dolor pickled pariatur, McSweeney’s squid. Craft beer pour-over bitters blog, direct trade bespoke sapiente. Carles Schlitz ethnic, irony hella Odd Future twee master cleanse accusamus anim. Magna bitters flannel, dreamcatcher tousled sustainable occupy ad reprehenderit pariatur aesthetic readymade vegan Truffaut. Brooklyn McSweeney’s helvetica next level. Tofu Neutra sartorial Cosby sweater, fingerstache magna fixie cred wayfarers Banksy occupy swag Williamsburg ea.
`}
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
          <LineChartWithBar
            queryLink={topPlayerBaseOnVolumeSales.key}
            data={topPlayerBaseOnVolumeSales.data}
            title={topPlayerBaseOnVolumeSales.title}
            baseSpan={3}
            isNotDate
            showSeprate
            barColor={colors[5]}
            barDataKey={"Total Volume of Sale"}
            lineDataKey={"Average price of Sale"}
            modalInfo={""}
            xAxisDataKey={"Player - Team"}
          />
          <BarGraph
            queryLink={topPlayerBaseOnNumberSales.key}
            values={topPlayerBaseOnNumberSales.data}
            title={topPlayerBaseOnNumberSales.title}
            baseSpan={3}
            isNotDate
            dataKey={"Player - Team"}
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
          ---
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

export default Governance;
