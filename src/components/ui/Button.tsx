import { Button as ChakraButton, ButtonProps } from '@chakra-ui/button';

type Props = ButtonProps & {
	hoverBgColor: string;
	children: string;
}

export default function Button({ hoverBgColor, children, ...rest }: Props) {
	return (
		<ChakraButton
			height="50px"
			borderRadius="sm"
			_hover={{ backgroundColor: hoverBgColor }}
			{...rest}
		>
			{children}
		</ChakraButton>
	);
}
