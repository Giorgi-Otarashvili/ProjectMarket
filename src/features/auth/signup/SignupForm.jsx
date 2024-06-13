import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupValidationSchema } from './signupValidation';
import { FormConteiner, Input } from '../../../components/atom';
import { Button } from '@mui/material';

export const SignupForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signupValidationSchema),
  });

const onSubmit= (data) => {
  console.log("data", data);
} 


  console.log('errors', errors);

  return (
    <FormConteiner>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              value={value}
              label='First Name'
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
          );
        }}

/>
      <Controller
        name='lastName'
        control={control}
        defaultValue=''
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              value={value}
              label='Last Name'
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
  
          );
        }}
      />

      <Controller
        name='email'
        control={control}
        defaultValue=''
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              value={value}
              label='Email'
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          );
        }}
      />

      <Controller
        name='password'
        control={control}
        defaultValue=''
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
            type='password'
              name={name}
              onChange={onChange}
              value={value}
              label='Password'
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
            );
            }}
            />
         
            <Button disabled={!isValid } onClick={handleSubmit(onSubmit)}>Sign Up</Button>
    </FormConteiner>
  );
};
