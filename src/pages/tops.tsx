import Tops from "lib/pages/tops";
import { getTopNFTVolume } from "lib/requests/tops";
import { ReturnDataType } from "lib/types/types/base";
import { ITopNFTBasedOnVolume } from "lib/types/types/tops";
export async function getStaticProps() {
  const [topNFTVolume] = await Promise.all([getTopNFTVolume()]);
  return {
    props: { topNFTVolume },
    revalidate: 10 * 60,
  };
}
export type TopsProps = {
  topNFTVolume: ReturnDataType<ITopNFTBasedOnVolume[]>;
};
export default Tops;
