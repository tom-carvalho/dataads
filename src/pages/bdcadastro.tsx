import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Divider, Flex, Heading, Link, SimpleGrid, Stack } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import axios from "axios"
import { Formik, Field, FieldProps, Form } from "formik"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"
import Head from 'next/head'
import { Select } from "@chakra-ui/select"

interface IForm{
    NOME: string
    CATEGORIA: string
    AGENCIA: string
    ANUNCIANTE: string
    MARCA: string
    SETOR: string
    SEGMENTO: string
    CONTATO: string
    DEPARTAMENTO: string
    CARGO: string
    FUNCAO: string
    EMAIL: string
    TELEFONE: string
    CELULAR: string
    WHATSAPP: string
    CIDADE: string
    ESTADO: string
    LINKEDIN: string
    TWITTER: string
    FACEBOOK: string
    INSTAGRAM: string
    ANIVERSARIO: string
    REFOBSERVACOES: string
}



export default function BdCadastro() {
    const toast = useToast()

    const formValues: IForm = {
        NOME: "",
        CATEGORIA: "",
        AGENCIA: "",
        ANUNCIANTE: "",
        MARCA: "",
        SETOR: "",
        SEGMENTO: "",
        CONTATO: "",
        DEPARTAMENTO: "",
        CARGO: "",
        FUNCAO: "",
        EMAIL: "",
        TELEFONE: "",
        CELULAR: "",
        WHATSAPP: "",
        CIDADE: "",
        ESTADO: "",
        LINKEDIN: "",
        TWITTER: "",
        FACEBOOK: "",
        INSTAGRAM: "",
        ANIVERSARIO: "",
        REFOBSERVACOES: "",
    }

    return (
        <>
            <Head>
                <title>Cadastro no banco de dados</title>
            </Head>
            <Flex
            as="main"
            width="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Flex bg="gray.700" justifyContent="center" width="100%">
                <Flex as={Link} href="/busca" flexDirection="column" alignItems="center">
                    <Image src="/images/Logo-negative.png" w="230px" alt="Logo DataAds" m="40px" />

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

            <Formik
                initialValues={formValues}
                onSubmit={async(values, actions) => {
                    await axios.post(
                        `/api/contacts`,
                        {
                            ...values,
                            EMAIL: values.EMAIL,
                            REFOBSERVACOES: values.REFOBSERVACOES
                        }
                    )

                    actions.resetForm()
                    toast({
                        title: "Sucesso",
                        description: "Dados do anunciante salvos com sucesso",
                        status: "success",
                        position: "bottom",
                        isClosable: true,
                        duration: 3000
                    })
                }}
            >
                {() => (
                    <Flex as={Form} flexDirection="column" w="648px">
                        <Flex flexDirection="column">
                            <SimpleGrid columns={2} columnGap="24px">
                            <Field name="CONTATO" flex={1}>
                            {({ field }: FieldProps) => (
                                <Flex flexDirection="column" w="100%">
                                    <FormLabel>Nome</FormLabel>
                                    <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                </Flex>
                            )}
                        </Field>
                                <Field name="CARGO">
                                    {({ field}: FieldProps) => (
                                    <Flex flexDirection="column">
                                    <FormLabel>Cargo</FormLabel>
                                    <Input {...field} size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                </Flex>
                            )}
                                </Field>
                                <Field name="FUNCAO">
                                {({ field}: FieldProps) => (
                                    <Flex flexDirection="column">
                                    <FormLabel>Fun????o</FormLabel>
                                    <Input {...field} size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                </Flex>
                            )}
                                </Field>

                                <Field name="EMAIL">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>E-mail</FormLabel>
                                            <Input {...field} size="lg" type="email" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="TELEFONE">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Telefone</FormLabel>
                                            <Input {...field} size="lg" type="phone" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="CELULAR">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Celular</FormLabel>
                                            <Input {...field} size="lg" type="phone" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="WHATSAPP">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>WhatsApp</FormLabel>
                                            <Input {...field} size="lg" type="phone" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="CIDADE">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Cidade</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="ESTADO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Estado</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="CATEGORIA">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Categoria</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="AGENCIA">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Ag??ncia</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="ANUNCIANTE">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Anunciante</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="MARCA">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Marca</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="SETOR">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Setor</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="SEGMENTO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Segmento</FormLabel>
                                            <Select placeholder="Selecionar Setor"
                                                {...field}
                                                size="lg"
                                                focusBorderColor="yellow.400"
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
                                    )}
                                </Field>
                                <Field name="DEPARTAMENTO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Departamento</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="LINKEDIN">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Linkedin</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="TWITTER">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Twitter</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="FACEBOOK">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Facebook</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="INSTAGRAM">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Instagram</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="ANIVERSARIO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Anivers??rio</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="REFOBSERVACOES">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Ref/ Observa????es</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="312px" />
                                        </Flex>
                                    )}
                                </Field>
                            </SimpleGrid>
                                <Flex justifyContent="flex-end" pb="40px" mt="30px">
                                    <Button backgroundColor="gray.700"
                                        type="submit"
                                        color="yellow.400"
                                        size="lg"
                                        _hover={{
                                            backgroundColor: "gray.800"
                                        }}
                                        transition="background-color 0.5s"
                                    >Salvar no banco de dados</Button>
                                </Flex>
                        </Flex>
                    </Flex>
                )}
            </Formik>


        </Flex>
    </>
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