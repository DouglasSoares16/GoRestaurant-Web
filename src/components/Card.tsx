import { Box, Button, Center, Heading, Image, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";

interface Props {
  img_url: string;
  title: string;
  description: string;
  price: string;
}

export function Card({ img_url, title, description, price }: Props) {
  const [isAvailable, setIsAvailable] = useState(true);

  function handleChangeAvailable() {
    setIsAvailable(!isAvailable)
  }

  return (
    <Box w="352px">
      <Center
        pos="relative"
        marginBottom="-90px"
        filter="auto"
        bgColor="yellow.400"
        borderRadius="8px 8px 0 0"
      >
        <Image
          width="272px"
          height="198px"
          marginTop="5"
          objectFit="contain"
          src={img_url}
          alt={title}
        />

        {!isAvailable && (
          <Box
            w="100%"
            height="170px"
            mt="-50px"
            pos="absolute"
            zIndex="10"
            bgColor="#C4C4C4"
            filter="auto"
            opacity="50%"></Box>
        )}
      </Center>

      <Box
        pos="relative"
        zIndex="1"
        padding="7"
        marginTop="10"
        bgColor="gray.100"
      >
        <Heading
          color="gray.600"
          fontFamily="Poppins"
          fontSize="28px"
          mb="4"
        >{title}</Heading>

        <Text color="gray.600" mb="4">{description}</Text>

        <Box display="flex" alignItems="center">
          <Text
            color={isAvailable ? "green.400" : "gray.500"}
            fontSize="24px"
            fontFamily="Roboto"
            fontWeight={400}>R$</Text>
          <Text
            color={isAvailable ? "green.400" : "gray.500"}
            ml="2"
            fontSize="24px"
            fontFamily="Roboto"
            fontWeight={700}>{price}</Text>
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
        borderRadius="0 0 8px 8px"
      >
        <Box display="flex">
          <Button w="24px" mr="3">
            <Box bgColor="white" padding="2.5" borderRadius="8px">
              <FiEdit3 size="24px" />
            </Box>
          </Button>

          <Button w="24px">
            <Box bgColor="white" padding="2.5" borderRadius="8px">
              <RiDeleteBin7Line size="24px" />
            </Box>
          </Button>
        </Box>

        <Box display="flex">
          <Text mr="2">{isAvailable ? "Disponível" : "Indisponível"}</Text>
          <Switch
            colorScheme="green"
            size="lg"
            isChecked={isAvailable}
            onChange={handleChangeAvailable} />
        </Box>
      </Box>
    </Box>
  );
}