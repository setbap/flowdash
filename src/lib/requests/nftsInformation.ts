import { INFTsInformation } from "lib/types/types/nftsInformation";
import moment from "moment";
import { getSimpleArrayData } from "./utils";
import millify from "millify";

export const getAllNFTsInformation = () =>
  getSimpleArrayData<INFTsInformation, INFTsInformation>(
    "f37120c4-592a-4db8-a330-5bac827fcc16",
    "NFTs Information",
    null,
    (data) => {
      return {
        ...data,
        "Moment Date": moment(data["Moment Date"]).format("MM/DD/YYYY"),
        "Top Sales $": +millify(data["Top Sales $"], {
          precision: 2,
          decimalSeparator: ".",
        }),
        "Average Sales $": +millify(data["Average Sales $"], {
          precision: 2,
          decimalSeparator: ".",
        }),
      };
    }
  );
