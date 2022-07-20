import { 
  Box, 
  Button, 
  ButtonGroup, 
  Container, 
  IconButton, 
  Image, 
  Text 
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

        <ButtonGroup isAttached size="lg" h="56px" paddingX="24px" paddingY="16px">
          <Button bgColor="#3BAF04">
            <Text 
              color="white"
              fontSize="16px"
              fontFamily="Poppins"
            >Novo Prato</Text>
          </Button>
          <IconButton
            aria-label='Adicionar um novo prato'
            icon={<PlusSquareIcon w="24px" h="24px" color="white" />}
            bgColor="#41C900"
          />
        </ButtonGroup>
      </Container>
    </Box>
  );
}
