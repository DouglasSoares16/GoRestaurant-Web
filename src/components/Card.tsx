import { Box, Center, Container, Heading, Image, Switch, Text } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";

export function Card() {
  return (
    <Box w="352px">
      <Center bgColor="yellow.400" marginBottom="-90px">
        <Image
          width="272px"
          height="198px"
          marginTop="5"
          objectFit="contain"
          src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-vegano-0.jpg"
          alt="Prato ao molho"
        />
      </Center>

      <Box
        pos="relative"
        zIndex="1"
        padding="7"
        marginTop="10"
        bgColor="gray.100"
      >
        <Heading color="gray.600" fontFamily="Poppins" fontSize="28px" mb="4">Ao Molho</Heading>

        <Text color="gray.600" mb="4">
          Macarrão ao molho branco, fughi e cheiro verde das montanhas.
        </Text>

        <Box display="flex" alignItems="center">
          <Text
            color="green.400"
            fontSize="24px"
            fontFamily="Roboto"
            fontWeight={400}>R$</Text>
          <Text
            color="green.400"
            ml="2"
            fontSize="24px"
            fontFamily="Roboto"
            fontWeight={700}>19,90</Text>
        </Box>
      </Box>
      <Box
        h="80px"
        bgColor="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX="8"
        paddingY="5"
      >
        <Box display="flex">
          <Box bgColor="white" padding="2.5" mr="2" borderRadius="8px">
            <FiEdit3 size="24px" />
          </Box>
          <Box bgColor="white" padding="2.5" borderRadius="8px">
            <RiDeleteBin7Line size="24px" />
          </Box>
        </Box>

        <Box display="flex">
          <Text mr="2">Disponível</Text>
          <Switch colorScheme="green" size="lg" />
        </Box>
      </Box>
    </Box >
  );
}