import { Button } from "@chakra-ui/button"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Divider, Flex, Spacer, Stack, Text } from "@chakra-ui/layout"

interface CardData {
    CATEGORIA: string
    AGENCIA: string
    EMPRESA: string
    MARCA: string
    SEGMENTO: string
    CONTATO: string
    CARGO: string
    EMAIL: string
    TELEFONE: string
    CELULAR: string
    CIDADE: string
    ESTADO: string
    LINKEDIN: string
    TWITTER: string
    FACEBOOK: string
    INSTAGRAM: string
    ANIVERSARIO: string
    OBSERVACAO: string
    ANUNCIANTE: string
    FUNCAO: string
    DEPARTAMENTO:string
}

interface CardProps {
    data: CardData
    onClickDelete: () => void
    onClickEdit: () => void
}


export function ContactCard({ data, onClickDelete, onClickEdit }: CardProps) {
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
            <Flex justifyContent="flex-end" alignItems="center" w="100%" >
                <Flex as={Button} padding="10px" variant="none" onClick={onClickEdit}>
                    <EditIcon w={6} h={6} color="grey" />
                </Flex>
                <Flex as={Button} padding="10px" variant="none" onClick={onClickDelete}>
                    <DeleteIcon w={6} h={6} color="red" _hover={{
                        color: "red.600"
                    }}/>
                </Flex>
            </Flex>

            <Stack spacing={1}>
                <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" fontSize="2xl" textAlign="left" color="gray.500" >{data.CONTATO}</Text>
                <Text fontSize="medium" textAlign="left" color="gray.500">{data.CARGO}</Text>
            </Stack>
            <Flex alignContent="center" mt="16px" mb="16px">
                <Divider colorScheme="gray.300" w="308px" h="1px" orientation="horizontal" />
            </Flex>
            <Flex>
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Função</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.FUNCAO || "-"}</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Departamento</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.DEPARTAMENTO || "-"}</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Agência</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.AGENCIA}</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Anunciante</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.ANUNCIANTE}</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Marca</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.MARCA}</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Categoria</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.CATEGORIA}</Text>
                </Stack>
                <Spacer />
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Segmento</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.SEGMENTO}</Text>
                </Stack>
            </Flex>
            <Flex alignContent="center" mt="16px" mb="16px">
                <Divider colorScheme="gray.300" w="308px" h="1px" orientation="horizontal" />
            </Flex>
            <Flex>
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">E-mail</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.EMAIL}</Text>
                </Stack>
            </Flex>
            <Flex mt="16px">
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Telefone</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.TELEFONE}</Text>
                </Stack>
                <Spacer />
                <Stack spacing={1}>
                    <Text fontSize="x-small" fontWeight="bold" textAlign="left" color="gray.500">Celular</Text>
                    <Text fontSize="medium" textAlign="left" color="gray.500">{data.CELULAR}</Text>
                </Stack>
            </Flex>


        </Flex>


    )


}
