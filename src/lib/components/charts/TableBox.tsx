import {
  Box,
  useColorModeValue,
  GridItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import { GRID_ITEM_SIZE } from "./template";
import ChartHeader from "../basic/ChartHeader";
import LinkToSourceMenuItem from "../basic/LinkToSourceMenuItem";
import { IShowTableProps, ShowTable } from "./ShowTable";

interface Props<T> extends IShowTableProps<T> {
  modelInfo: string;
  title: string;
  queryLink?: string;
  baseSpan: number;
}

function TableBox<T>({
  baseSpan = 3,
  queryLink,
  data,
  columnsDef,
  title,
  modelInfo,
  customHeaderColor,
}: Props<T>) {
  const [spanItem, _] = useState(GRID_ITEM_SIZE[baseSpan - 1]);

  const bgTooltip = useColorModeValue("gray.300", "gray.700");
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <GridItem
      rowSpan={1}
      color={textColor}
      bgColor={bgCard}
      shadow="base"
      transition={"all 0.5s "}
      _hover={{ boxShadow: "var(--chakra-shadows-lg)" }}
      borderRadius={"2xl"}
      width="100%"
      colSpan={spanItem}
    >
      <Box
        px="6"
        pt="4"
        pb={"2"}
        _hover={{ boxShadow: `0px 0px 4px ${bgTooltip}` }}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        id={title}
      >
        <ChartHeader
          chartMenu={
            <MenuList bg="#232323">
              {queryLink && (
                <>
                  <LinkToSourceMenuItem queryLink={queryLink} />
                </>
              )}
            </MenuList>
          }
          modalInfo={modelInfo}
          title={title}
        />
        <Box p={"0"} />
        <ShowTable
          customHeaderColor={"#000"}
          data={data}
          columnsDef={columnsDef}
        />
      </Box>
    </GridItem>
  );
}

export default TableBox;