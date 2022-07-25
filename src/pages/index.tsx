import { useEffect, useState } from 'react';
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
  useToast,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { SubmitHandler, useForm } from 'react-hook-form';

import { Card } from "../components/Card";
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from "../components/Header";
import { InputPrice } from '../components/InputPrice';
import { api } from '../services/api';

interface CreateDishFormData {
  img_url: string;
  title: string;
  description: string;
  price: string;
}

interface DishProps extends CreateDishFormData {
  id: string;
}

export default function Home() {
  const [createdDish, setCreatedDish] = useState(false);
  const [dishes, setDishes] = useState<DishProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();

  const handleCreateDish: SubmitHandler<CreateDishFormData> = async (values) => {
    try {
      const { data } = await api.post("/dishes", values);

      setDishes(oldState => [
        ...oldState,
        {
          ...values,
          id: data.id
        }
      ]);
    } catch (error) {
      onClose();
      toast({
        title: "Error: Não foi possível cadastrar",
        status: "error",
        isClosable: true,
      });
    }

    setCreatedDish(true);

    setTimeout(() => {
      reset();
      setCreatedDish(false);
      onClose();
    }, 1500);
  }

  async function handleDeleteDish(id: string) {
    try {
      await api.delete(`dishes/${id}`);

      const filteredDishes = dishes.filter((dish) => dish.id !== id);

      setDishes(filteredDishes);

      toast({
        title: "Prato Deletado!",
        status: "info",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error: Não foi possível deletar",
        status: "error",
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get("/dishes");

      setDishes(data);
      setIsLoading(false);
    }

    loadData();
  }, []);

  return (
    <>
      <Header onAddNewDish={onOpen} />

      <Container minW="1120px" mt="-120px">
        {
          isLoading ? (
            <Center mt="200px">
              <Spinner size="xl" color="red.500" />
            </Center>
          ) 
          : 
          (
            <SimpleGrid columns={3} spacing="32px">
              {
                dishes.map(dish => (
                  <Card
                    key={dish.id}
                    id={dish.id}
                    img_url={dish.img_url}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    onDelete={handleDeleteDish}
                  />
                ))
              }
            </SimpleGrid>
          )
        }
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
                  color="white">Prato adicionado!</Text>
              </Box>
            </ModalContent>
          ) : (
            <ModalContent maxH="900px" maxW="736px" p="4" bg="gray.100">
              <ModalHeader
                fontWeight="600"
                fontFamily="Poppins"
                fontSize="36px"
                color="black">Novo Prato</ModalHeader>

              <ModalCloseButton />

              <ModalBody mb="5">
                <Box>
                  <Input
                    label="URL da imagem"
                    placeholder="Cole o link aqui"
                    {...register("img_url")}
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
