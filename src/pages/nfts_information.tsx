import NFTsInformation from "lib/pages/nftsInformation";
import { getAllNFTsInformation } from "lib/requests/nftsInformation";
import { ReturnDataType } from "lib/types/types/base";
import { INFTsInformation } from "lib/types/types/nftsInformation";

export async function getStaticProps() {
  const [allNFTsInformation] = await Promise.all([getAllNFTsInformation()]);
  return {
    props: {
      allNFTsInformation,
    },
    revalidate: 10 * 60,
  };
}
export type NFTsInformationProps = {
  allNFTsInformation: ReturnDataType<INFTsInformation[]>;
};
export default NFTsInformation;
