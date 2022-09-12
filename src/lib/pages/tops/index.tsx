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
    cell: (info) => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
          <Button size={"sm"} variant="outline" m={"1"} onClick={onOpen}>
            Show Detail
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#191919"}>
              <ModalHeader>Moment Description</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{info.getValue() as string}</ModalBody>

              <ModalFooter>
                <Button mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    },
    header: (props) => <span>{props.header.id}</span>,
  },
];

const Governance = ({ topNFTVolume }: TopsProps): JSX.Element => {
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
            modelInfo={""}
            data={topNFTVolume.data}
            columnsDef={colDef}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
