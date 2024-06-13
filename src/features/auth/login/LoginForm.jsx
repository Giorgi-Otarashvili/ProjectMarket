import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { loginValidationSchema } from './loginValidation'
import { FormConteiner } from '../../../components/atom/FormConteiner'
import { Input } from '../../../components/atom/input'
import { Button } from '../../../components/atom'

export const LoginForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors, isValid }
        } = useForm({
            mode: "onChange",
            resolver: yupResolver(loginValidationSchema),
            })
const onSubmit = (data) => {
console.log(data);
}

    return (
        <div>
            <FormConteiner>
                <Controller name="email" control={control} defaultValue=''
                    render={({ field }) => {
                        const { name, onChange } = field
                        return <Input
                            name={name}
                            onChange={onchange}
                            label="Email"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                    }} />

                <Controller
                    name="password"
                    control={control}
                    defaultValue=''
                    render={({ field }) => {
                        const { name, onChange } = field
                        return <Input
                        type='password'
                            name={name}
                            onChange={onChange}
                            label="password"
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                        />
                    }} />
                    <Button disabled={!isValid} onClick={handleSubmit(onSubmit)}>Log in</Button>
            </FormConteiner>
        </div>
    )
}
