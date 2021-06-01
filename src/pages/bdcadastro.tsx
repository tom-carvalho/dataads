import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout"


const BdCadastro = () => (

    <Flex
        as="main"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
    >
        <Flex bg="gray.700" h="44" justifyContent="center" width="100%">
            <Flex flexDirection="column" alignItems="center">
                <Image src="/images/Logo-negative.png" w="230px" alt="Logo DataAds" mt="40px" />
                <Text w="60%" textAlign="center" mt="8px" color="gray.50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis mattis tellus, vitae congue lectus pharetra.</Text>
            </Flex>
        </Flex>
        <Flex p="24px">
            <Stack>
                <Heading size="lg" color="gray.500">Cadastro Base de Dados</Heading>
            </Stack>
        </Flex>
        <Flex alignContent="center" mb="32px">
            <Divider colorScheme="gray.300" w="648px" h="1px" orientation="horizontal" />
        </Flex>

        <Flex as="form" flexDirection="column" w="648px">
            <Flex flexDirection="column">
                <FormLabel>Nome</FormLabel>
                <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="648px" />
            </Flex>
            <Flex flexDirection="column">
                <Flex flexDirection="row">
                    <Flex flexDirection="column">
                        <FormLabel>Cargo</FormLabel>
                        <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                    </Flex>
                    <Flex flexDirection="column" ml="24px" >
                        <FormLabel>Agência</FormLabel>
                        <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                    </Flex>
                </Flex>

                <Flex flexDirection="column">
                    <Flex flexDirection="row">
                        <Flex flexDirection="column">
                            <FormLabel>Marca</FormLabel>
                            <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                        </Flex>
                        <Flex flexDirection="column" ml="24px" >
                            <FormLabel>Anunciante</FormLabel>
                            <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                        </Flex>
                    </Flex>

                    <Flex flexDirection="column">
                        <Flex flexDirection="row">
                            <Flex flexDirection="column">
                                <FormLabel>Segmento</FormLabel>
                                <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                            </Flex>
                            <Flex flexDirection="column" ml="24px" >
                                <FormLabel>E-mail</FormLabel>
                                <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                            </Flex>
                        </Flex>

                        <Flex flexDirection="column">
                            <Flex flexDirection="row">
                                <Flex flexDirection="column">
                                    <FormLabel>Telefone</FormLabel>
                                    <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                </Flex>
                                <Flex flexDirection="column" ml="24px" >
                                    <FormLabel>Celular</FormLabel>
                                    <Input size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                </Flex>
                            </Flex>

                        </Flex>

                    </Flex>

                </Flex>
            </Flex>
            <Flex justifyContent="flex-end">
                <Button backgroundColor="gray.700"
                    color="yellow.400"
                    size="lg"
                    _hover={{
                        backgroundColor: "gray.800"
                    }}
                    transition="background-color 0.5s"
                    onClick={() => {
                    }}
                >Salvar no banco de dados</Button>
            </Flex>
        </Flex>

    </Flex>
)

export default BdCadastro