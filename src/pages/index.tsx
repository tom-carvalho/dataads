import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, Link, Text, Box, } from "@chakra-ui/layout"
import { Fragment, useContext, useState } from "react"
import Head from "next/head"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"
import { AuthContext } from "../context/authContext"

export default function IndexPage () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useContext(AuthContext)

  async function handleLogin() {
    await signIn({
      email,
      password
    })
  }
  return (
    <Fragment>
      <Head>
        <title>DataChain | Login</title>
      </Head>
      <Flex
        as="main"
        height="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
        bg={{ xl: "gray.700", lg: "gray.700", md: "gray.700", sm: "gray.50", base: "gray.50" }}
      >

        <Box bg="gray.50" borderRadius="lg" w={{ xl: "500px", lg: "500px", md: "400px", sm: "100%", base: "100%" }}>
          <Flex alignItems="center" justifyContent="center" flexDirection="column">
            <Flex flexDirection="column" padding="20px" alignItems="center" justifyContent="center">
              <Image src="/images/Logo.png" w="220px" alt="Logo DataAds" mt="24px" />
              <Text w="90%" textAlign="center" mt="8px">O DataChain é um Database Management atualizado com informações sobre as principais agências, campanhas, empresas e pessoas do segmento publicitário.</Text>
            </Flex>
            <Flex as="form" flexDirection="column" w="100%" paddingX="40px" mt="32px" >
              <FormLabel>E-mail</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="nome@dominio.com" size="lg"  mb="24px" focusBorderColor="yellow.400" />
              <FormLabel >Senha</FormLabel>
              <Input onChange={(e) => setPassword(e.target.value)} value={password}placeholder="Senha de 8 caracteres" size="lg" type="password" mb="24px" focusBorderColor="yellow.400" />

              <Button
                backgroundColor="gray.700"
                color="yellow.400"
                size="lg"
                _hover={{
                  backgroundColor: "gray.800"
                }}
                transition="background-color 0.5s"
                onClick={handleLogin}>Entrar</Button>

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
      </Flex >
    </Fragment>


  )
}

export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) => {
  const { dataChainToken: token } = parseCookies(context)

  if (token) {
    return {
      redirect: {
        destination: '/busca',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

