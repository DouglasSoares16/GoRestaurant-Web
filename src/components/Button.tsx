import { Box, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface Props {
  handleAction(): void;
  title: string;
  icon: ElementType;
}

export function Button({ handleAction, icon, title }: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      transition="0.5s"
      _hover={{
        filter: "auto",
        cursor: "pointer",
        brightness: 0.8
      }}
    >
      <Box
        bgColor="#3BAF04"
        h="50px"
        paddingX="6"
        paddingY="4"
        borderRadius="8px 0 0 8px"
        display="flex"
        alignItems="center"
        onClick={handleAction}
      >
        <Text
          color="white"
          fontSize="16px"
          fontFamily="Poppins"
        >{title}</Text>
      </Box>

      <Box
        bgColor="#41C900"
        h="50px"
        w="56px"
        borderRadius="0 8px 8px 0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} fontSize="24px" color="white" />
      </Box>
    </Box>
  );
}