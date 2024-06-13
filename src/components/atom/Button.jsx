import React from 'react'
import {Button as MuiButton} from "@mui/material"

export const Button = ({onClick, children, disabled}) => {
  return (
<MuiButton onClick={onClick} disabled={disabled}>
{children}
</MuiButton>
)
}
