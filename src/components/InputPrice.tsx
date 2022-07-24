import { FormControl, FormLabel, InputProps as ChakraInputProps, Input as ChakraInput, InputGroup, InputLeftAddon, InputLeftElement } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  label: string;
  marginLeft?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ label, marginLeft, ...rest }, ref) => {
    return (
      <FormControl ml={marginLeft}>
        <FormLabel
          fontSize="14px"
          color="gray.500"
          fontWeight="400">{label}</FormLabel>

        <InputGroup>
          <InputLeftElement
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="100%"
            fontFamily="Roboto"
            fontSize="16px">R$</InputLeftElement>

          <ChakraInput
            size="lg"
            bgColor="white"
            fontFamily="Roboto"
            fontSize="16px"
            _placeholder={{
              color: "gray.500",
              opacity: 0.7
            }}
            ml="-5px"
            borderRadius="8px"
            ref={ref}
            {...rest} />
        </InputGroup>
      </FormControl>
    );
  }

export const InputPrice = forwardRef(InputBase);