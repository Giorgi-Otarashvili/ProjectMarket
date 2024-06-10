import React from 'react'
import { useRoutes } from 'react-router-dom'
import { LoginPage, SignUpPage } from '../pages'

export const RoutesComponent = () => {
  return (
    <div>{useRoutes([
     {
        path: "/login",
        element: <LoginPage />
     } ,
     {
        path: "/signup",
        element: <SignUpPage />
     }

    ])}</div>
  )
}
