import { Divider, Flex, Spacer, Stack, Text } from "@chakra-ui/layout"


export const Card = () => {
    return (

        <Flex
            as="main"
            width="356px"
            flexDirection="column"
            bgColor="white"
            borderRadius="8px"
            padding="24px"
            boxShadow="md"

        >

            <Stack spacing={1}>
                <Text fontSize="2xl" textAlign="left" color="gray.500">Nome Sobrenome</Text>
                <Text fontSize="medium" textAlign="left" color="gray.500">Cargo</Text>
            </Stack>
            <Flex alignContent="center" mt="16px" mb="16px">
                <Divider colorScheme="gray.300" w="308px" h="1px" orientation="horizontal" />
            </Flex>
            <Flex>
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Agência</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">Nome da Agência</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Marca</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">Nome da Marca</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Anunciante</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">Nome do Anunciante</Text>
                </Stack>
                <Spacer />
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Segmento</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">Nome do Segmento</Text>
                </Stack>
            </Flex>
            <Flex alignContent="center" mt="16px" mb="16px">
                <Divider colorScheme="gray.300" w="308px" h="1px" orientation="horizontal" />
            </Flex>
            <Flex>
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">E-mail</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">nome@email.com.br</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Telefone</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">(11) 4876-1234)</Text>
                </Stack>
                <Spacer />
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Celular</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">(11) 98765-1234</Text>
                </Stack>
            </Flex>


        </Flex>


    )


}
