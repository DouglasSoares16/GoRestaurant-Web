import { FormControl, FormLabel, InputProps, Input as ChakraInput } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
  marginLeft?: string;
}

export function Input({ label, marginLeft, ...rest }: Props) {
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
        {...rest} />
    </FormControl>
  );
}