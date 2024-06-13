import { styled, Box, Stack, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const AuthConteiner = ({ children }) => {
    return <StyledContainer>
 <Link to={'/'}>
 <img 
 src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/global-market-icon.png" 
 alt="jha" 
 width={200}
 height={200}/>
 </Link>
        <StyledStack>
            {children}
        </StyledStack>
    </StyledContainer>
}

const StyledContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 24px 24px 24px",
  
 
}))

const StyledStack = styled(Stack)(({theme}) => ({
    width: "70%",
    padding: "12px 12px",
    borderRadius: 16,
    border: "2px solid #FFFFFF",
    backdropFilter: "blur(20px)",
    background: "rgba(255, 255, 255, 0.7",
    boxShadow: "0px 60px 180px rgba(0, 0, 0, 0.15",

}))
