import { Flex, Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { QueryResultSet } from "@flipsidecrypto/sdk";
import TextBox from "lib/components/charts/TextBox";
import { metadata_name, NFT_METADATA } from "lib/types/types/nftsInformation";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

function NFTMEetaData() {
  const rounter = useRouter();
  const id = rounter.query.id;

  const query = useQuery(["nfts_information_metadata", id], async () => {
    const fetchedData = await fetch(`/api/nft_metadata/${id}`);
    const nftMetadata: QueryResultSet = await fetchedData.json();
    return nftMetadata;
  });
  if (query.isSuccess && query.data.status === "finished") {
    return (
      <>
        <Flex wrap="wrap" direction="row">
          {Object.keys(query.data.records![0] as any)
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
                    {/* @ts-ignore  */}
                    {query.data.records![0][key as any]}
                  </strong>
                </Box>
              );
            })}
        </Flex>
        <TextBox>
          {`
moment description

__${query.data.records![0].moment_description}__
`}
        </TextBox>
      </>
    );
  } else if (query.isLoading || query.isIdle) {
    return (
      <>
        <Flex wrap="wrap" direction="row">
          {Array.from({ length: 12 }).map((_: any, index) => {
            return (
              <SkeletonText
                noOfLines={1}
                bg={"#191919"}
                px={"4"}
                color="white"
                py="6"
                mb="3"
                me={"3"}
                rounded={"md"}
                key={index}
                w={`${150 + Math.random() * 100}px`}
              ></SkeletonText>
            );
          })}
        </Flex>
        <SkeletonText noOfLines={4} spacing="4" />
      </>
    );
  } else {
    return <></>;
  }
}

export default NFTMEetaData;
