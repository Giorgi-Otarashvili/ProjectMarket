import React from 'react'
import { AuthConteiner } from '../components/AuthConteiner'
import { Stack } from '@mui/material'
import { Text } from '../../../components/atom'
import { SignupForm } from './SignupForm'

export const Signup = () => {
  return (
    <div>
        <AuthConteiner>
            <Stack>
<Text> Sign Up</Text>
<SignupForm></SignupForm>
            </Stack>
        </AuthConteiner>
    </div>

)
}
