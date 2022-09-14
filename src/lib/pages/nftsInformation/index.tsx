import { Box, SimpleGrid } from "@chakra-ui/react";
import { INFTsInformation } from "lib/types/types/nftsInformation";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { NFTsInformationProps } from "pages/nfts_information";
import { ColumnDef } from "@tanstack/react-table";
import TableBox from "lib/components/charts/TableBox";
import { useRouter } from "next/router";
import TextBox from "lib/components/charts/TextBox";

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

const colDef: ColumnDef<INFTsInformation>[] = [
  {
    accessorFn: (row) => row["NFT ID"],
    enableSorting: false,
    id: "ID",
    cell: (info) => info.getValue(),
    header: () => <span>ID</span>,
  },
  {
    accessorFn: (row) => row["Tier"],
    id: "Tier",
    cell: (info) => info.getValue(),
    header: () => <span>Tier</span>,
  },
  {
    accessorFn: (row) => row["Player Name"],
    id: "Player Name",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["Player Position"],
    id: "Player Position",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Team Name"],
    id: "Team Name",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["Away Team Name"],
    id: "Away Team Name",
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
    accessorFn: (row) => row["Week"],
    id: "Week",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Moment Date"],
    id: "Moment Date",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Series"],
    id: "Series",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["Set Name"],
    id: "Set Name",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["Average Sales $"],
    id: "Average Sales $",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["Top Sales $"],
    id: "Top Sales $",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["Minimum Sales $"],
    id: "Minimum Sales $",
    cell: (info) => (
      <Box p={2} height={"40px"}>
        {info.getValue() as string}
      </Box>
    ),
    header: (props) => <span>{props.header.id}</span>,
  },
];

const NFTAnalysis = ({
  allNFTsInformation,
}: NFTsInformationProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} NFTs Information | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
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
      <Box mx={"auto"} pt="4" px={{ base: 6, sm: 2, md: 8 }}>
        <TextBox>
          {`
The above ID is the same as the id used in [__https://nflallday.com/__](https://nflallday.com/) for each moment.
Important properties of each NFT on NBA All Day has shown.If you click on each row, you will be able to see the sales transactions of each NFT.
`}
        </TextBox>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"4"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={allNFTsInformation.key}
            title={allNFTsInformation.title}
            baseSpan={3}
            onRowClick={(row) =>
              router.push(`/nfts_information/${row["NFT ID"]}`)
            }
            modalInfo={``}
            data={allNFTsInformation.data}
            columnsDef={colDef}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NFTAnalysis;
