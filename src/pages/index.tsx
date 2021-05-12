import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, Grid, Link, Text, Box, } from "@chakra-ui/layout"

const IndexPage = () => (
  <Grid
    as="main"
    height="100vh"
    width="100vw"
    justifyContent="center"
    alignItems="center"
    bg="gray.700"
  >

    <Box bg="gray.50" borderRadius="lg" display="flex" m={[12]} w={[300, 350, 400, 500]}>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Flex flexDirection="column" padding="20px" alignItems="center" justifyContent="center">
          <Image src="/images/Logo.png" w="230px" alt="Logo DataAds" mt="24px" />
          <Text w="90%" textAlign="center" mt="8px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis mattis tellus, vitae congue lectus pharetra.</Text>
        </Flex>
        <Flex as="form" flexDirection="column" w="100%" paddingX="40px" mt="32px" >
          <FormLabel>E-mail</FormLabel>
          <Input placeholder="nome@dominio.com" size="lg" type="email" mb="24px" focusBorderColor="yellow.400" />
          <FormLabel >Senha</FormLabel>
          <Input placeholder="Senha de 8 caracteres" size="lg" type="password" mb="24px" focusBorderColor="yellow.400" />
          <Button
            backgroundColor="gray.700"
            color="yellow.400"
            size="lg"
            _hover={{
              backgroundColor: "gray.800"
            }}
            transition="background-color 0.5s"
            onClick={() => {
            }}
          >Entrar</Button>
        </Flex>

        <Flex mt="24px" flexDir="column" alignItems="center" justifyContent="center">
          <Text fontSize="small">Não possui conta?</Text>
          <Text fontSize="small">Entre em contato <Link color="blue.600" fontWeight="bold" _hover={{
            textDecor: "none",
            color: "blue.700"
          }}>clicando aqui.</Link></Text>

          <Link mt="40px" mb="40px" fontSize="small" href="" color="blue.600" fontWeight="bold" _hover={{
            textDecor: "none",
            color: "blue.700"
          }}>Esqueci minha senha.</Link>

        </Flex>
      </Flex>
    </Box>
  </Grid >
)

export default IndexPage


