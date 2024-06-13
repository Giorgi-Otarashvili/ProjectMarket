import { TextField } from '@mui/material'
import React from 'react'

export const Input = (
  {type =  "text", 
    label,
     error,
      helperText,
      name,
       onChange,
        styles = {}
      }
) => {
  return <TextField 
  type={type} 
  label={label} 
  error={error} 
  name={name}
   onChange={onChange}
   helperText={helperText}
   sx={{
    marginTop: 3,
    width: "100%",
    "& fieldset": {
      borderRadius: "20px"
    }, 
    ...styles
   }}
   />
}
