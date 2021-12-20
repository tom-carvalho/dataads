import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, SimpleGrid,  } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, } from "@chakra-ui/modal";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { Field, FieldProps, Form, Formik } from "formik";
import { CardData } from "../pages/busca";
interface EditContactModalProps {
  contact: CardData | null
  isOpen: boolean
  onClose: () => void
}

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



export function EditContactModal({contact, isOpen, onClose,}: EditContactModalProps) {
  const formValues: IForm = {
    NOME: contact?.CONTATO || "",
    CATEGORIA: contact?.CATEGORIA || "",
    AGENCIA: contact?.AGENCIA || "",
    ANUNCIANTE: contact?.ANUNCIANTE || "",
    MARCA: contact?.MARCA || "",
    SETOR: contact?.SETOR || "",
    SEGMENTO: contact?.SEGMENTO || "",
    CONTATO: contact?.CONTATO || "",
    DEPARTAMENTO: contact?.DEPARTAMENTO || "",
    CARGO: contact?.CARGO || "",
    FUNCAO: contact?.FUNCAO || "",
    EMAIL: contact?.EMAIL || "",
    TELEFONE: contact?.TELEFONE || "",
    CELULAR: contact?.CELULAR || "",
    WHATSAPP: contact?.WHATSAPP || "",
    CIDADE: contact?.CIDADE || "",
    ESTADO: contact?.ESTADO || "",
    LINKEDIN: contact?.LINKEDIN || "",
    TWITTER: contact?.TWITTER || "",
    FACEBOOK: contact?.FACEBOOK || "",
    INSTAGRAM: contact?.INSTAGRAM || "",
    ANIVERSARIO: contact?.ANIVERSARIO || "",
    REFOBSERVACOES: contact?.REFOBSERVACOES || "",
  }

  // useEffect(() => {
  //   if(contact) {
  //     setContactData(contact)
  //   }
  // }, [])

  const toast = useToast()

  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="lg" >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Editar Contato</DrawerHeader>
        <DrawerCloseButton/>
      <DrawerBody scr>
      <Formik
                initialValues={formValues}
                onSubmit={async(values, actions) => {
                    await axios.put(
                        `/api/contacts?_id=${contact?._id}`,
                        {
                            ...values,
                            EMAIL: values.EMAIL,
                            REFOBSERVACOES: values.REFOBSERVACOES
                        }
                    )

                    actions.resetForm()
                    onClose()
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
                    <Flex as={Form} flexDirection="column">
                        <Flex flexDirection="column">
                    <SimpleGrid columns={2} columnGap="24px" paddingBottom="180px">
                            <Field name="CONTATO" flex={1}>
                            {({ field }: FieldProps) => (
                                <Flex flexDirection="column" w="100%">
                                    <FormLabel>Nome</FormLabel>
                                    <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                </Flex>
                            )}
                        </Field>
                                <Field name="CARGO">
                                    {({ field}: FieldProps) => (
                                    <Flex flexDirection="column">
                                    <FormLabel>Cargo</FormLabel>
                                    <Input {...field} size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                </Flex>
                            )}
                                </Field>
                                <Field name="FUNCAO">
                                {({ field}: FieldProps) => (
                                    <Flex flexDirection="column">
                                    <FormLabel>Função</FormLabel>
                                    <Input {...field} size="lg" type="Text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                </Flex>
                            )}
                                </Field>

                                <Field name="EMAIL">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>E-mail</FormLabel>
                                            <Input {...field} size="lg" type="email" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="TELEFONE">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Telefone</FormLabel>
                                            <Input {...field} size="lg" type="phone" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="CELULAR">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Celular</FormLabel>
                                            <Input {...field} size="lg" type="phone" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="WHATSAPP">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>WhatsApp</FormLabel>
                                            <Input {...field} size="lg" type="phone" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="CIDADE">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Cidade</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="ESTADO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Estado</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="CATEGORIA">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Categoria</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="AGENCIA">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Agência</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="ANUNCIANTE">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Anunciante</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="MARCA">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Marca</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="SETOR">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Setor</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="SEGMENTO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Segmento</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="DEPARTAMENTO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Departamento</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="LINKEDIN">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Linkedin</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="TWITTER">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Twitter</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="FACEBOOK">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Facebook</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="INSTAGRAM">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Instagram</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="ANIVERSARIO">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Aniversário</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>
                                <Field name="REFOBSERVACOES">
                                    {({ field }: FieldProps) => (
                                        <Flex flexDirection="column">
                                            <FormLabel>Ref/ Observações</FormLabel>
                                            <Input {...field} size="lg" type="text" mb="24px" focusBorderColor="yellow.400" w="100%" />
                                        </Flex>
                                    )}
                                </Field>

                    </SimpleGrid>
                    <Flex position="absolute"  bottom={0} right={0} padding="10px" bgColor="white" w="100%">
                      <Flex justifyContent="flex-end" pb="40px" mt="30px" w="100%">
                        <Button backgroundColor="gray.700"
                            type="submit"
                            color="yellow.400"
                            size="lg"
                            _hover={{
                                backgroundColor: "gray.800"
                            }}
                            transition="background-color 0.5s"
                        >Salvar</Button>
                      </Flex>
                      <Flex justifyContent="flex-end" pb="40px" mt="30px">
                        <Button vcolor="yellow.400"
                          size="lg"
                          _hover={{
                              backgroundColor: "gray.300"
                          }}
                          transition="background-color 0.5s" onClick={onClose} ml="24px">Cancelar</Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                )}
            </Formik>
      </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}