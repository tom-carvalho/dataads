import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout"


export const Search = () => {
    return (

        <Flex
            as="main"
            width="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Flex bg="gray.700" h="44" justifyContent="center" paddingBottom="300px" width="100%">
                <Flex flexDirection="column" alignItems="center">
                    <Image src="/images/Logo-negative.png" w="230px" alt="Logo DataAds" mt="40px" />
                    <Text w="60%" textAlign="center" mt="8px" color="gray.50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis mattis tellus, vitae congue lectus pharetra.</Text>
                </Flex>
            </Flex>

            <Flex mt="-112px" padding="24px" w="100%" justifyContent="center">
                <SimpleGrid w="70%" bg="white" borderRadius="lg" padding="32px" boxShadow="lg" columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }} gap="32px">
                    <Flex flexDirection="column">
                        <FormLabel>Anunciante</FormLabel>
                        <Input placeholder="Pesquise por um anunciante" size="lg" type="Text" mb="16px" focusBorderColor="yellow.400" />
                    </Flex>
                    <Flex flexDirection="column">
                        <FormLabel>Agência</FormLabel>
                        <Input placeholder="Pesquise por uma agência" size="lg" type="Text" mb="16px" focusBorderColor="yellow.400" />
                    </Flex>
                    <Flex flexDirection="column">
                        <FormLabel>Marca</FormLabel>
                        <Input placeholder="Pesquise por uma marca" size="lg" type="Text" mb="16px" focusBorderColor="yellow.400" />
                    </Flex>
                    <Flex flexDirection="column">
                        <FormLabel>Nome</FormLabel>
                        <Input placeholder="Pesquise por um nome" size="lg" type="Text" mb="16px" focusBorderColor="yellow.400" />
                    </Flex>
                </SimpleGrid>

            </Flex>

            <Flex justifyContent="flex-end" w="70%" mt="-48px">
                <Button marginRight="32px" backgroundColor="gray.700"
                    color="yellow.400"
                    size="lg"
                    _hover={{
                        backgroundColor: "gray.800"
                    }}
                    transition="background-color 0.5s"
                    onClick={() => {
                    }}
                >Buscar</Button>
            </Flex>

        </Flex>


    )


}
