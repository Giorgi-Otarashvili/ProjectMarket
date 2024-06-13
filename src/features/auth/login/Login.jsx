import React from 'react'
import { AuthConteiner } from '../components/AuthConteiner'
import { Stack } from '@mui/material'
import { LoginForm } from './LoginForm'
import { Text } from '../../../components/atom'

export const Login = () => {
  return <>
    <AuthConteiner>
      <Stack>
<Text>Log in</Text>
        <LoginForm />
      </Stack>
    </AuthConteiner>
  </>
}
