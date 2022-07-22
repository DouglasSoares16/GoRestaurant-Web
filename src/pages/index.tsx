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
} from '@chakra-ui/react'
import { BsCheck2Square } from "react-icons/bs";

import { Card } from "../components/Card";
import { Input } from '../components/input';
import { Button } from '../components/Button';
import { Header } from "../components/Header";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  ];

  return (
    <>
      <Header onAddNewDish={onOpen} />

      <Container minW="1120px" mt="-120px">
        <SimpleGrid columns={3} spacing="32px">
          {
            items.map(item => (
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
              <Input label="URL da imagem" placeholder="Cole o link aqui" />

              <HStack spacing="4" marginY="6">
                <Input label="Nome do prato" placeholder="Ex: Moda Italiana" w="440px" />
                <Input label="Preço" defaultValue="R$ " w="200px" />
              </HStack>

              <Input label="Descrição do prato" />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              handleAction={() => { }}
              icon={BsCheck2Square}
              title="Adicionar Prato" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
