import Router from 'next/router'
import { createContext, useState } from 'react'
import { setCookie } from 'nookies'

import { api } from '../services/api'
import { useToast } from '@chakra-ui/toast'
import { ComponentDefaultProps } from '@chakra-ui/theme'
import axios from 'axios'
type SignInData = {
  email: string
  password: string
}

type User = {
  name: string
  email: string
}

type AuthContextType =  {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
  setUser: (user: User) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: ComponentDefaultProps) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  const toast = useToast()

  async function signIn({ email, password }: SignInData) {
      const response = await axios.get(`/api/login?E-MAIL=${email.replace("@", "%40")}&SENHA=${password}`)
      if (response.data.length) {
        setCookie(undefined, 'dataChainToken', response.data[0]["E-MAIL"], {
          maxAge: 60 * 30,
        })
        api.defaults.headers.Authorization = `Bearer ${response.data[0]["E-MAIL"]}`

        setUser({
          email: response.data[0]["E-MAIL"],
          name: response.data[0].NOME
        })
  
        Router.push('/busca')
      } else {
        toast({
                title: 'Algo seu errado',
                description:
                  'Usuário ou senha inválidos, cheque suas credenciais e tente novamente',
                status: 'error',
                position: 'top-right',
                isClosable: true,
              })
      }

      // .catch(error => {
      //   if (error.response.status === 401) {
      //     toast({
      //       title: 'Algo seu errado',
      //       description:
      //         'Usuário ou senha inválidos, cheque suas credenciais e tente novamente',
      //       status: 'error',
      //       position: 'top-right',
      //       isClosable: true,
      //     })
      //   } else {
      //     toast({
      //       title: 'Algo seu errado',
      //       description:
      //         'Ocorreu um erro inesperado, tente novamente mais tarde.',
      //       status: 'error',
      //       position: 'top-right',
      //       isClosable: true,
      //     })
      //   }
      // })
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
