import { SimpleGrid, Container } from "@chakra-ui/react";

import { Card } from "../components/Card";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Container minW="1120px" mt="-120px">
        <SimpleGrid columns={3} spacing="32px">
          <Card />
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Container>
    </>
  )
}
