import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { Fragment, useCallback, useEffect, useState } from "react"
import { Select } from "@chakra-ui/react"
import { ContactCard } from "../components/contactCard"
import Head from 'next/head'
import axios from "axios"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"
import { EditContactModal } from "../components/editContactModal"


export interface CardData {
    _id: string
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
    OBSERVACAO: string,
    REFOBSERVACOES: string,
    WHATSAPP: string

}


export default function SearchPage (){
    const [emptyResult, setEmptyResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [anunciante, setAnunciante] = useState("")
    const [agencia, setAgencia] = useState("")
    const [marca, setMarca] = useState("")
    const [contato, setContato] = useState("")
    const [setor, setSetor] = useState("")
    const [funcao, setFuncao] = useState("")
    const [departamento, setDepartamento] = useState("")
    const [searchResult, setSearchResult] = useState<CardData[]>([])
    const [showEditModal, setShowEditModal] = useState(false)
    const [selectedContact, setSelectedContact] = useState<CardData | null>(null)

    const toast = useToast()


    useEffect(() => {
        searchInitialData()
    }, [])

    const searchInitialData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(
                `/api/contacts`,
            )

            const formatedResponse: CardData[] = response.data.map((i: any) => ({
                _id: i._id["$oid"],
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
                EMAIL: i.EMAIL,
                TELEFONE: i.TELEFONE,
                CELULAR: i.CELULAR,
                CIDADE: i.CIDADE,
                ESTADO: i.ESTADO,
                LINKEDIN: i.LINKEDIN,
                TWITTER: i.TWITTER,
                FACEBOOK: i.FACEBOOK,
                INSTAGRAM: i.INSTAGRAM,
                ANIVERSARIO: i.ANIVERSARIO,
                REFOBSERVACOES: i.REFOBSERVACOES,
                WHATSAPP: i.WHATSAPP
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
        setContato("")
        setFuncao("")
        setDepartamento("")
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
            {
                name: "CONTATO",
                value: contato,
            },
            {
                name: "FUNCAO",
                value: funcao,
            },
            {
                name: "DEPARTAMENTO",
                value: departamento,
            }
        ]

        const validFields = fields.filter(field => field.value.length > 1)


        const normalizedFields = validFields.map(v => `${v.name}=${v.value}`)
        return normalizedFields.join("&")



    }

    const handleSearch = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axios.get(
                `/api/contacts?${createSearchQuery()}`,
            )

            const formatedResponse: CardData[] = response.data.map((i: any) => ({
                _id: i._id["$oid"],
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
                EMAIL: i.EMAIL,
                TELEFONE: i.TELEFONE,
                CELULAR: i.CELULAR,
                CIDADE: i.CIDADE,
                ESTADO: i.ESTADO,
                LINKEDIN: i.LINKEDIN,
                TWITTER: i.TWITTER,
                FACEBOOK: i.FACEBOOK,
                INSTAGRAM: i.INSTAGRAM,
                ANIVERSARIO: i.ANIVERSARIO,
                REFOBSERVACOES: i.EMAIL,
                WHATSAPP: i.WHATSAPP
            }))
            setSearchResult(formatedResponse);
            if (formatedResponse.length === 0) {
                setEmptyResult(true)
            } else {

                setEmptyResult(false)
            }
        } catch (err) {
            toast({
                title: "Ops, ocorreu um erro.",
                description: "N??o conseguimos realizar a consulta, tente novamente mais tarde.",
                status: "error",
                position: "bottom",
                isClosable: true,
                duration: 3000
            })

        } finally {
            setLoading(false)

        }

    }, [anunciante, agencia, marca, setor, contato, searchResult])


    const renderEmptyContent = () => {
        return (
            <Flex>
                <Text fontSize="xl" color="gray.500">
                    {emptyResult
                        ? "N??o foi poss??vel encontrar um resultado, tente novamente."
                        : "Fa??a uma busca para exibir o resultado"
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
                        <Image src="/images/Logo-negative.png" w="220px" alt="Logo DataAds" mt="40px" />
                        <Text w="60%" textAlign="center" mt="8px" color="gray.50">O DataChain ?? um Database Management atualizado com informa????es sobre as principais ag??ncias, campanhas, empresas e pessoas do segmento publicit??rio.</Text>
                    </Flex>
                </Flex>

                <Flex mt="-112px" padding="24px" w="100%" justifyContent="center">
                    <SimpleGrid w="70%" bg="white" borderRadius="lg" padding="32px" boxShadow="lg" columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }} gap="16px">
                        <Flex flexDirection="column">
                            <FormLabel>Nome do Contato</FormLabel>
                            <Input
                                placeholder="Pesquise por um contato"
                                size="lg"
                                type="Text"
                                mb="16px"
                                focusBorderColor="yellow.400"
                                value={contato}
                                onChange={(e) => setContato(e.target.value)}
                            />
                        </Flex>
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
                            <FormLabel>Ag??ncia</FormLabel>
                            <Input
                                placeholder="Pesquise por uma ag??ncia"
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
                            <Select placeholder="Selecionar Setor"
                                size="lg"
                                focusBorderColor="yellow.400"
                                value={setor}
                                onChange={(e) => setSetor(e.target.value)}
                            >
                                <option value="Bens de Consumo">Bens de Consumo</option>
                                <option value="Servi??os">Servi??os</option>
                                <option value="Telecom/Tecnologia/Streaming">Telecom/Tecnologia/Streaming</option>
                                <option value="Com??rcio/Varejo">Com??rcio/Varejo</option>
                                <option value="Finan??as">Finan??as (financeiro)</option>
                                <option value="Autos">Autos</option>
                                <option value="Governo">Governo</option>
                            </Select>
                        </Flex>
                        <Flex flexDirection="column">
                            <FormLabel>Departamento</FormLabel>
                            <Select placeholder="Selecionar Departamento"
                                size="lg"
                                focusBorderColor="yellow.400"
                                value={departamento}
                                onChange={(e) => setDepartamento(e.target.value)}
                            >
                                <option value="M??dia">M??dia</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Atendimento/Planejamento">Atendimento/ Planejamento</option>
                                <option value="Cria????o">Cria????o</option>
                                <option value="Financeiro">Financeiro</option>
                                <option value="Corporativo">Corporativo</option>
                            </Select>
                        </Flex><Flex flexDirection="column">
                            <FormLabel>Fun????o</FormLabel>
                            <Select placeholder="Selecionar Fun????o"
                                size="lg"
                                focusBorderColor="yellow.400"
                                value={funcao}
                                onChange={(e) => setFuncao(e.target.value)}
                            >
                                <option value="Analista/Assistente">Analista/Assistente</option>
                                <option value="Gerente/Supervisor/Coordenador">Gerente/ Supervisor/ Coordenador</option>
                                <option value="Diretor/VP">Diretor/VP</option>
                                <option value="C Level">C Level</option>
                                
                            </Select>
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
                        onClick={handleDownload}
                    >Download</Button>


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

    const handleDownload = async () => {
            await axios.get(`/api/contacts/export?${createSearchQuery()}`, { responseType: 'blob' }
            ).then((res) => {
                var data = new File([res.data],"pesquisa-datachain.xlsx")

                var csvURL = window.URL.createObjectURL(data);
                var tempLink = document.createElement('a');
                    tempLink.href = csvURL;
                    tempLink.setAttribute('download', 'pesquisa-datachain.xlsx');
                    tempLink.click();

            }).catch(()=>{
                toast({
                    title: 'Erro',
                    description: 'Ocorreu um erro ao gerar sua planilha, tente novamente.',
                    status: 'error',
                    isClosable: true,
                    position: 'bottom',
                })
            })
    }

    const renderLoading = () => {
        return (
            <Flex>
                <Text fontSize="xl" color="gray.500">Carregando....</Text>
            </Flex>
        )
    }

    async function handleDeleteContact(id: string) {
        try {
            await axios.delete(`/api/contacts?_id=${id}`)
            handleSearch()
            toast({
                title: 'Tudo certo!',
                description: 'Contato deletado com sucesso',
                status: 'success',
                isClosable: true,
                position: 'bottom',
            })
        } catch(error) {
            toast({
                title: 'Erro',
                description: 'Ocorreu ao deletar o contato',
                status: 'error',
                isClosable: true,
                position: 'bottom',
            })
        }
    }

    function handleEditContact(contact: CardData){
        setSelectedContact(contact)
        setShowEditModal(true)
    }


    const renderData = () => {
        return (
            <Fragment>
                <Head>
                    <title>DataChain | Busca</title>
                </Head>
                {!searchResult.length ? (
                    renderEmptyContent()
                ) : (
                    <SimpleGrid columns={[1, 1, 2, 3, 3]} rowGap="32px" columnGap="32px" mb="32px" padding="32px">
                        {searchResult.map((contact) => (
                            <ContactCard 
                                data={contact} 
                                onClickDelete={() => handleDeleteContact(contact._id)} 
                                onClickEdit={() => handleEditContact(contact)}/>
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
            <EditContactModal 
                onClose={() => {
                    setShowEditModal(false)
                    setSelectedContact(null)
                    handleSearch()
                }} 
                isOpen={showEditModal} 
                contact={selectedContact} 
            />
            <Flex justifyContent="center" alignItems="center" w="100%" mt="24px">
                {loading ? renderLoading() : renderData()}
            </Flex>
        </Fragment>
    )







}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { dataChainToken: token } = parseCookies(context)

    if (!token) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
      return {
        props: {},
      }

}