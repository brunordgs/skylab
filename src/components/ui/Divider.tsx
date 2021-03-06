import { Divider as ChakraDivider, Grid } from '@chakra-ui/layout';

export default function Divider() {
	return (
		<Grid
			gridTemplateColumns="1fr 1fr"
			columnGap="12"
			opacity="0.4"
		>
			<ChakraDivider marginY="6" />
			<ChakraDivider marginY="6" />
		</Grid>
	);
}