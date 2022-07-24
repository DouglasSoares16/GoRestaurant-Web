import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  Container,
  useDisclosure,
  Box,
  HStack,
  Text,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { SubmitHandler, useForm } from 'react-hook-form';

import { Card } from "../components/Card";
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from "../components/Header";
import { InputPrice } from '../components/InputPrice';

interface CreateDishFormData {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
}

const items = [
  {
    id: "21300123",
    img_url: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-vegano-0.jpg",
    title: "Prato ao molho",
    description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas.",
    price: "19,90"
  },
  {
    id: "21312489063",
    img_url: "https://www.receitasagora.com.br/wp-content/uploads/2020/06/receita-spaguete-com-camarao.jpg",
    title: "A La Camarón",
    description: "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
    price: "25,80"
  },
  {
    id: "2137456123",
    img_url: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-vegano-0.jpg",
    title: "Prato ao molho",
    description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas.",
    price: "19,90"
  },
  {
    id: "213746352123",
    img_url: "https://www.receitasagora.com.br/wp-content/uploads/2020/06/receita-spaguete-com-camarao.jpg",
    title: "A La Camarón",
    description: "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
    price: "25,80"
  },
]

export default function Home() {
  const [createdDish, setCreatedDish] = useState(false);
  const [dishes, setDishes] = useState(items);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();

  const handleCreateDish: SubmitHandler<CreateDishFormData> = async (values) => {
    setDishes(oldState => [
      ...oldState,
      {
        id: String(items.length + Math.random()),
        ...values,
        img_url: values.imgUrl
      }]);

    setCreatedDish(true);

    setTimeout(() => {
      reset();
      setCreatedDish(false);
      onClose();
    }, 1500);
  }

  return (
    <>
      <Header onAddNewDish={onOpen} />

      <Container minW="1120px" mt="-120px">
        <SimpleGrid columns={3} spacing="32px">
          {
            dishes.map(item => (
              <Card
                key={item.id}
                img_url={item.img_url}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))
          }
        </SimpleGrid>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
        {
          createdDish ? (
            <ModalContent
              h="100px"
              w="300px"
              margin="auto"
              bg="transparent"
              boxShadow="none"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Box display="flex" flexDirection="column" alignItems="center">
                <AiOutlineLike
                  size="40px"
                  color="#39B100"
                  style={{
                    marginBottom: 10
                  }}
                />

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  color="white">Prato
                  adicionado!</Text>
              </Box>
            </ModalContent>
          ) : (
            <ModalContent maxH="900px" maxW="736px" p="4" bg="gray.100">
              <ModalHeader
                fontWeight="600"
                fontFamily="Poppins"
                fontSize="36px"
                color="black">Novo
                Prato</ModalHeader>
              <ModalCloseButton />
              <ModalBody mb="5">
                <Box>
                  <Input
                    label="URL da imagem"
                    placeholder="Cole o link aqui"
                    {...register("imgUrl")}
                  />

                  <HStack spacing="4" marginY="6">
                    <Input
                      label="Nome do prato"
                      placeholder="Ex: Moda Italiana"
                      w="440px"
                      {...register("title")}
                    />
                    <InputPrice
                      label="Preço"
                      type="number"
                      {...register("price")}
                    />
                  </HStack>

                  <Input label="Descrição do prato" {...register("description")} />
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button
                  handleAction={handleSubmit(handleCreateDish)}
                  icon={BsCheck2Square}
                  title="Adicionar Prato" />
              </ModalFooter>
            </ModalContent>
          )
        }
      </Modal>
    </>
  )
}
