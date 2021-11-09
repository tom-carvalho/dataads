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
    try {
      const response = await axios.post(`/api/login`, {
        ["E-MAIL"]: email,
        SENHA: password
      })
        setCookie(undefined, 'dataChainToken', response.data.token, {
          maxAge: 60 * 60 * 12,
        })
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
  
        Router.push('/busca')

    } catch(error) {
      toast({
        title: 'Algo seu errado',
        description:
          'Usuário ou senha inválidos, cheque suas credenciais e tente novamente',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      })
    }
      

  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
