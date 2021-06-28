
import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { Fragment, useCallback, useEffect, useState } from "react"
import { Card } from "../components/card"
import Head from 'next/head'
import axios from "axios"


interface CardData {
    CATEGORIA: string,
    AGENCIA: string,
    EMPRESA: string,
    ANUNCIANTE: string,
    SETOR: string,
    MARCA: string,
    SEGMENTO: string,
    CONTATO: string,
    CARGO: string,
    FUNCAO: string,
    DEPARTAMENTO: string,
    EMAIL: string,
    TELEFONE: string,
    CELULAR: string,
    CIDADE: string,
    ESTADO: string,
    LINKEDIN: string,
    TWITTER: string,
    FACEBOOK: string,
    INSTAGRAM: string,
    ANIVERSARIO: string,
    OBSERVACAO: string
}


const SearchPage = () => {
    const [emptyResult, setEmptyResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [anunciante, setAnunciante] = useState("")
    const [agencia, setAgencia] = useState("")
    const [marca, setMarca] = useState("")
    const [setor, setSetor] = useState("")
    const [searchResult, setSearchResult] = useState<CardData[]>([])

    const toast = useToast()


    useEffect(() => {
        searchInitialData()
    }, [])

    const searchInitialData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(
                `/api/search`,
            )

            const formatedResponse: CardData[] = response.data.map((i: any) => ({
                CATEGORIA: i.CATEGORIA,
                AGENCIA: i.AGENCIA,
                EMPRESA: i.EMPRESA,
                ANUNCIANTE: i.ANUNCIANTE,
                SETOR: i.SETOR,
                MARCA: i.MARCA,
                SEGMENTO: i.SEGMENTO,
                CONTATO: i.CONTATO,
                CARGO: i.CARGO,
                FUNCAO: i.FUNCAO,
                DEPARTAMENTO: i.DEPARTAMENTO,
                EMAIL: i["E-mail"],
                TELEFONE: i.TELEFONE,
                CELULAR: i.CELULAR,
                CIDADE: i.CIDADE,
                ESTADO: i.ESTADO,
                LINKEDIN: i.LINKEDIN,
                TWITTER: i.TWITTER,
                FACEBOOK: i.FACEBOOK,
                INSTAGRAM: i.INSTAGRAM,
                ANIVERSARIO: i.ANIVERSARIO,
                OBSERVACAO: i.OBSERVACAO
            }))
            setSearchResult(formatedResponse);
            if (formatedResponse.length === 0) {
                setEmptyResult(true)
            } else {

                setEmptyResult(false)
            }
            handleClearForm()
        } catch (err) {
            toast({
                title: "Ops, ocorreu um erro.",
                description: "Ocorreu um erro ao carregar os dados recarregue a pagina e tente novamente.",
                status: "error",
                position: "bottom",
                isClosable: true,
                duration: 3000
            })

        } finally {
            setLoading(false)

        }

    }


    const handleClearForm = () => {
        setAnunciante("")
        setAgencia("")
        setMarca("")
        setSetor("")
    }

    const createSearchQuery = () => {

        const fields = [
            {
                name: "ANUNCIANTE",
                value: anunciante
            },
            {
                name: "AGENCIA",
                value: agencia
            },
            {
                name: "MARCA",
                value: marca
            },
            {
                name: "SETOR",
                value: setor
            },
        ]

        const validFields = fields.filter(field => field.value.length > 1)


        const normalizedFields = validFields.map(v => `${v.name}=${v.value}`)
        return normalizedFields.join("&")



    }

    const handleSearch = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axios.get(
                `/api/search?${createSearchQuery()}`,
            )

            const formatedResponse: CardData[] = response.data.map((i: any) => ({
                CATEGORIA: i.CATEGORIA,
                AGENCIA: i.AGENCIA,
                EMPRESA: i.EMPRESA,
                ANUNCIANTE: i.ANUNCIANTE,
                SETOR: i.SETOR,
                MARCA: i.MARCA,
                SEGMENTO: i.SEGMENTO,
                CONTATO: i.CONTATO,
                CARGO: i.CARGO,
                FUNCAO: i.FUNCAO,
                DEPARTAMENTO: i.DEPARTAMENTO,
                EMAIL: i["E-mail"],
                TELEFONE: i.TELEFONE,
                CELULAR: i.CELULAR,
                CIDADE: i.CIDADE,
                ESTADO: i.ESTADO,
                LINKEDIN: i.LINKEDIN,
                TWITTER: i.TWITTER,
                FACEBOOK: i.FACEBOOK,
                INSTAGRAM: i.INSTAGRAM,
                ANIVERSARIO: i.ANIVERSARIO,
                OBSERVACAO: i.OBSERVACAO
            }))
            setSearchResult(formatedResponse);
            if (formatedResponse.length === 0) {
                setEmptyResult(true)
            } else {

                setEmptyResult(false)
            }
            handleClearForm()
        } catch (err) {
            toast({
                title: "Ops, ocorreu um erro.",
                description: "Não conseguimos realizar a consulta, tente novamente mais tarde.",
                status: "error",
                position: "bottom",
                isClosable: true,
                duration: 3000
            })

        } finally {
            setLoading(false)

        }

    }, [anunciante, agencia, marca, setor, searchResult])




    const renderEmptyContent = () => {
        return (
            <Flex>
                <Text fontSize="xl" color="gray.500">
                    {emptyResult
                        ? "Não foi possível encontrar um resultado, tente novamente."
                        : "Faça uma busca para exibir o resultado"
                    }
                </Text>
            </Flex>
        )
    }

    const renderSearch = () => {
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
                        <Text w="60%" textAlign="center" mt="8px" color="gray.50">O DataAds é um Database Management atualizado com informações sobre as principais agências, campanhas, empresas e pessoas do segmento publicitário.</Text>
                    </Flex>
                </Flex>

                <Flex mt="-112px" padding="24px" w="100%" justifyContent="center">
                    <SimpleGrid w="70%" bg="white" borderRadius="lg" padding="32px" boxShadow="lg" columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }} gap="32px">
                        <Flex flexDirection="column">
                            <FormLabel>Anunciante</FormLabel>
                            <Input
                                placeholder="Pesquise por um anunciante"
                                size="lg"
                                type="Text"
                                mb="16px"
                                focusBorderColor="yellow.400"
                                value={anunciante}
                                onChange={(e) => setAnunciante(e.target.value)}
                            />
                        </Flex>
                        <Flex flexDirection="column">
                            <FormLabel>Agência</FormLabel>
                            <Input
                                placeholder="Pesquise por uma agência"
                                size="lg"
                                type="Text"
                                mb="16px"
                                focusBorderColor="yellow.400"
                                value={agencia}
                                onChange={(e) => setAgencia(e.target.value)}
                            />
                        </Flex>
                        <Flex flexDirection="column">
                            <FormLabel>Marca</FormLabel>
                            <Input
                                placeholder="Pesquise por uma marca"
                                size="lg"
                                type="Text"
                                mb="16px"
                                focusBorderColor="yellow.400"
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                            />
                        </Flex>
                        <Flex flexDirection="column">
                            <FormLabel>Setor</FormLabel>
                            <Input
                                placeholder="Pesquise por um setor"
                                size="lg"
                                type="Text"
                                mb="16px"
                                focusBorderColor="yellow.400"
                                value={setor}
                                onChange={(e) => setSetor(e.target.value)}
                            />
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
                        onClick={handleSearch}
                    >Buscar</Button>
                </Flex>

            </Flex>


        )
    }

    const renderLoading = () => {
        return (
            <Flex>
                <Text fontSize="xl" color="gray.500">Carregando....</Text>
            </Flex>
        )
    }

    const renderData = () => {
        return (
            <Fragment>
                <Head>
                    <title>DataAds | Busca</title>
                </Head>
                {!searchResult.length ? (
                    renderEmptyContent()
                ) : (
                    <SimpleGrid columns={[1, 1, 2, 3, 3]} rowGap="32px" columnGap="32px" mb="32px" padding="32px">
                        {searchResult.map((result) => (
                            <Card data={result} />
                        ))}
                    </SimpleGrid>
                )
                }
            </Fragment>
        )
    }
    return (
        <Fragment>
            {renderSearch()}
            <Flex justifyContent="center" alignItems="center" w="100%" mt="24px">
                {loading ? renderLoading() : renderData()}
            </Flex>
        </Fragment>
    )
}

export default SearchPage