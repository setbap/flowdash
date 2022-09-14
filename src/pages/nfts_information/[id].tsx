import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { QueryResultSet, QueryStatusFinished } from "@flipsidecrypto/sdk";
import { useQuery } from "react-query";
import { TxItemContainer } from "lib/components/basic/TxItemContainer";
import names from "lib/utility/names";
import NFTSellInformation from "lib/pages/nftsInformationDetail";
import { INFTSaleInformation } from "lib/types/types/nftsInformation";
import { useRouter } from "next/router";

function NFT_INFORMATION() {
  const rounter = useRouter();
  const id = rounter.query.id;

  const query = useQuery(["nfts_information", id], async () => {
    const fetchedData = await Promise.all([
      fetch(`/api/nfts_information/${id}`),
      // fetch(`/api/nft_metadata/${id}`),
    ]);
    const saleInfo: QueryResultSet = await fetchedData[0].json();
    // const nftMetadata: QueryResultSet = await fetchedData[1].json();
    return {
      saleInfo,
      // , nftMetadata
    };
  });

  if (query.isSuccess && query.data.saleInfo.status === "finished") {
    return (
      <>
        <NFTSellInformation
          nftSellInformation={{
            data: {
              //@ts-ignore
              sale: query.data.saleInfo.records as INFTSaleInformation[],
              //@ts-ignore
              metadata: {},
              // query.data.nftMetadata.records[0],
            },

            key: "e4960d14-686d-45ac-851a-f13283e9a473",
            title: "Sales tx of a NFT",
          }}
        />
      </>
    );
  }

  return (
    <Box>
      <Box
        opacity={0.4}
        userSelect="none"
        textAlign={"center"}
        fontSize="small"
        my={"2px"}
      >
        All Data Come From{" "}
        <Link textDecor={"underline"} href="https://flipsidecrypto.xyz/">
          FlipSide Crypto
        </Link>{" "}
        With Help of{" "}
        <Link
          textDecor={"underline"}
          href="https://github.com/FlipsideCrypto/sdk/blob/main/js/README.md"
        >
          FlipSide SDK
        </Link>
      </Box>

      <Box>
        <Container mt={["4", "8"]} maxW={"container.xl"}>
          {query.isLoading && (
            <TxItemContainer>
              <Spinner size="lg" thickness="0.2rem" />
              <Text textAlign={"center"} fontSize={["lg", "xl"]}>
                Loading To Geting Data From FlipSide Crypto...
              </Text>
            </TxItemContainer>
          )}
          {query.isIdle && (
            <TxItemContainer>
              <Text textAlign={"center"} fontSize={["md", "xl"]}>
                Enter an ETH address and click the search button to get All $
                {names.BLOCKCHAIN}
                Transaction History From FlipSide Crypto
              </Text>
            </TxItemContainer>
          )}

          {query.isSuccess &&
            query.data.saleInfo.status === QueryStatusFinished &&
            !query.data.saleInfo.records?.length && (
              <TxItemContainer>
                <Text textAlign={"center"} fontSize={["md", "xl"]}>
                  We Don't Find Any ${names.BLOCKCHAIN} Transaction From This
                  Address.
                </Text>
              </TxItemContainer>
            )}

          {(query.isError ||
            (query.isSuccess && !!query.error) ||
            (query.isSuccess && !!query.data.saleInfo.error)) && (
            <TxItemContainer>
              <Text textAlign={"center"} fontSize={["md", "xl"]}>
                UnKnown Error Happend.
              </Text>
            </TxItemContainer>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default NFT_INFORMATION;
