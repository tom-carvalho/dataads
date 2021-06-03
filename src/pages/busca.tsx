
import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { Fragment, useCallback, useState } from "react"
import { Card } from "../components/card"
import { api } from "../services/api"


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
}


const SearchPage = () => {
    const [loading, setLoading] = useState(false)
    const [advertiser, setAdvertiser] = useState("")
    const [agency, setAgency] = useState("")
    const [brand, setBrand] = useState("")
    const [name, setName] = useState("")
    const [ searchResult, setSearchResult ] = useState<CardData[] | []>([])

    const toast = useToast()


    const handleClearForm = () => {
        setName("")
        setAdvertiser("")
        setAgency("")
        setBrand("")
    }

    const handleSearch = useCallback(async () => {
        try {
            setLoading(true)
            const response = await api.get(
                `/search?ANUNCIANTE=${advertiser}&AGENCIA=${agency}&MARCA=${brand}&NOME=${name}`
            )

            const formatedResponse: CardData[] = response.data.map((i: any) => ({
                CATEGORIA: i.CATEGORIA,
                AGENCIA: i.AGENCIA,
                EMPRESA: i.EMPRESA,
                MARCA: i.MARCA,
                SEGMENTO: i.SEGMENTO,
                CONTATO: i.CONTATO,
                CARGO: i.CARGO,
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

    }, [advertiser, agency, brand, name, searchResult])




    const renderEmptyContent = () => {
        return (
            <Flex>
                <Text fontSize="xl" color="gray.500">
                    Faça uma busca para exibir o resultado
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
                        <Text w="60%" textAlign="center" mt="8px" color="gray.50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis mattis tellus, vitae congue lectus pharetra.</Text>
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
                                value={advertiser}
                                onChange={(e) => setAdvertiser(e.target.value)}
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
                                value={agency}
                                onChange={(e) => setAgency(e.target.value)}
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
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </Flex>
                        <Flex flexDirection="column">
                            <FormLabel>Nome</FormLabel>
                            <Input 
                                placeholder="Pesquise por um nome" 
                                size="lg" 
                                type="Text" 
                                mb="16px" 
                                focusBorderColor="yellow.400"                                
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                {!searchResult.length ? (
                    renderEmptyContent()
                ):( 
                    <Flex>
                        {searchResult.map((result: CardData) => (
                            <Card data={result} />
                        ))}
                    </Flex>
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