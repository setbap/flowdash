import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import {
  INFTSaleInformation,
  INFTsInformation,
  metadata_name,
  NFT_METADATA,
} from "lib/types/types/nftsInformation";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { NFTsInformationProps } from "pages/nfts_information";
import { ColumnDef } from "@tanstack/react-table";
import TableBox from "lib/components/charts/TableBox";
import { useRouter } from "next/router";
import TextBox from "lib/components/charts/TextBox";
import { ReturnDataType } from "lib/types/types/base";

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

const colDef: ColumnDef<INFTSaleInformation>[] = [
  {
    accessorFn: (row) => row["tx id"],
    enableSorting: false,
    id: "ID",
    cell: (info) => {
      const { hasCopied, onCopy } = useClipboard(info.getValue() as string);

      return (
        <Box p={"2"} display={"flex"}>
          <Text me={"1"}>{(info.getValue() as string).slice(0, 5)}...</Text>

          <Button size={"xs"} onClick={onCopy} ml={2}>
            {hasCopied ? "Copied" : "Copy"}
          </Button>
        </Box>
      );
    },
    header: () => <span>ID</span>,
  },
  {
    accessorFn: (row) => row["timestamp"],
    id: "Timestamp",
    cell: (info) => info.getValue(),
    header: () => <span>timestamp</span>,
  },
  {
    accessorFn: (row) => row["buyer wallet"],
    id: "Buyer wallet",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
  {
    accessorFn: (row) => row["seller wallet"],
    id: "Seller wallet",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },

  {
    accessorFn: (row) => row["price"],
    id: "Price",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
];

const NFTSellInformation = ({
  nftSellInformation,
}: {
  nftSellInformation: ReturnDataType<{
    sale: INFTSaleInformation[];
    metadata: NFT_METADATA;
  }>;
}): JSX.Element => {
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
      <Box mx={"auto"} w="full" pt="4" px={{ base: 6, sm: 2, md: 8 }}>
        <Flex wrap="wrap" direction="row">
          {Object.keys(nftSellInformation.data.metadata)
            .filter((key) => metadata_name.includes(key))
            .map((key: any) => {
              return (
                <Box
                  bg={"#191919"}
                  px={"4"}
                  py="4"
                  mb="3"
                  me={"3"}
                  rounded={"md"}
                  key={key}
                >
                  {key.split("_").join(" ")} :
                  <strong>
                    {/* @ts-ignore */}
                    {nftSellInformation.data.metadata[key as any]}
                  </strong>
                </Box>
              );
            })}
        </Flex>
        <TextBox>
          {`
moment description

__${nftSellInformation.data.metadata.moment_description}__

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
            tablePageSize={20}
            customHeaderColor={colors[2]}
            queryLink={nftSellInformation.key}
            title={nftSellInformation.title}
            baseSpan={3}
            modalInfo={``}
            data={nftSellInformation.data.sale}
            columnsDef={colDef}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NFTSellInformation;
