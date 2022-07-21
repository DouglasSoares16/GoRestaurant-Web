import {
  Box,
  Text,
  Image,
  Container
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Box
      as="header"
      h="281px"
      w="100%"
      bgColor="red.500"
    >
      <Container
        minW="1120px"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        pt="43px"
      >
        <Image src="/assets/logo.png" alt="Logo" h="62px" />

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
          >
            <Text
              color="white"
              fontSize="16px"
              fontFamily="Poppins"
            >Novo Prato</Text>
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
            <PlusSquareIcon w="24px" h="24px" color="white" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
