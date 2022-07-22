import {
  Box,
  Image,
  Container
} from "@chakra-ui/react";
import { Button } from "./Button";
import { PlusSquareIcon } from "@chakra-ui/icons";

interface Props {
  onAddNewDish(): void;
}

export function Header({ onAddNewDish }: Props) {
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

        <Button handleAction={onAddNewDish} icon={PlusSquareIcon} title="Novo Prato" />
      </Container>
    </Box>
  );
}
