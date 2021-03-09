import { Input as ChakraInput, InputProps } from '@chakra-ui/input';

export default function Input(props: InputProps) {
	return (
		<ChakraInput
			height="50px"
			backgroundColor="gray.800"
			focusBorderColor="purple.500"
			borderRadius="sm"
			{...props}
		/>
	);
}
