import { SimpleGrid, Container } from "@chakra-ui/react";

import { Card } from "../components/Card";
import { Header } from "../components/Header";

export default function Home() {
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
      <Header />

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
    </>
  )
}
