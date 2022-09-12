import { Box } from "@chakra-ui/react";
import MDRenderer from "./MDRenderer";

export const ModalInfo = ({
  modalInfo,
  largeSpanSize,
  infoSizePercentage,
}: {
  modalInfo: string;
  largeSpanSize: number;
  infoSizePercentage: number;
}) => {
  const showExtraInfo: boolean = !(modalInfo === "" || modalInfo === null);

  return showExtraInfo ? (
    <Box
      bg={"#1c1c1c"}
      p={6}
      rounded="lg"
      height={"full"}
      w={
        largeSpanSize !== 3
          ? "100%"
          : [
              "100%",
              "100%",
              "100%",
              `${50}%`,
              `${infoSizePercentage}%`,
              `${infoSizePercentage}%`,
            ]
      }
    >
      <Box>
        <MDRenderer>{modalInfo}</MDRenderer>
      </Box>
    </Box>
  ) : null;
};
