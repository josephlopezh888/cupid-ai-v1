import React from 'react'
import SignInForm from '~/app/_components/auth/signInForm'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

const SignUpPage = () => {
  return ( 
    <SignInForm/>
  )
}

export default SignUpPage