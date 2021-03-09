import { Flex, Grid, Heading, Link, Text } from '@chakra-ui/layout';
import Button from '../components/ui/Button';
import Divider from '../components/ui/Divider';
import Input from '../components/ui/Input';

export default function Home() {
	return (
		<Grid
			as="main"
			height="100vh"
			templateColumns="1fr 480px 480px 1fr"
			templateRows="1fr 480px 1fr"
			templateAreas="
				'. . . .'
				'. logo form .'
				'. . . .'
			"
			justifyContent="center"
			alignItems="center"
		>
			<Flex gridArea="logo" flexDir="column" alignItems="flex-start">
				<img src="/rocket.svg" alt="Rocket" />
				<Heading size="2xl" lineHeight="shorter" marginTop="10">
					Faça seu login na plataforma
				</Heading>
			</Flex>
			<Flex
				gridArea="form"
				height="100%"
				backgroundColor="gray.700"
				borderRadius="md"
				flexDir="column"
				alignItems="stretch"
				padding="16"
			>
				<Input
					placeholder="E-mail"
				/>
				<Input
					type="password"
					placeholder="Senha"
					marginTop="2"
				/>
				<Link
					alignSelf="flex-start"
					marginTop="2"
					fontSize="sm"
					color="purple.600"
					fontWeight="bold"
					_hover={{ color: 'purple.500' }}
				>
					Esqueci minha senha
				</Link>
				<Button
					backgroundColor="purple.600"
					hoverBgColor="purple.500"
					marginTop="6"
				>
					{'Entrar'.toUpperCase()}
				</Button>
				<Text
					textAlign="center"
					fontSize="sm"
					color="gray.300"
					marginTop="6"
				>
					Não tem uma conta?{' '}
					<Link
						color="purple.600"
						fontWeight="bold"
						_hover={{ color: 'purple.500' }}
					>
						Registre-se
					</Link>
				</Text>
				<Divider />
				<Flex alignItems="center">
					<Text fontSize="sm">Ou entre com</Text>
					<Button
						flex="1"
						backgroundColor="gray.600"
						marginLeft="6"
						hoverBgColor="purple.500"
					>
						{'GitHub'.toUpperCase()}
					</Button>
				</Flex>
			</Flex>
		</Grid>
	);
}
