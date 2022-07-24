import { FormControl, FormLabel, InputProps as ChakraInputProps, Input as ChakraInput } from "@chakra-ui/react";
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

      <ChakraInput
        size="lg"
        bgColor="white"
        fontFamily="Roboto"
        fontSize="16px"
        _placeholder={{
          color: "gray.500",
          opacity: 0.7
        }}
        borderRadius="8px"
        ref={ref}
        {...rest} />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);