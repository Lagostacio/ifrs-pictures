import ErrorMessage from './ErrorMessage'
import { LoginForm } from './LoginForm'
import { useState, useContext } from 'react'

export const Login = () => {

    const [error, setError] = useState('')


    return (
        <>
            <h1>Login </h1>
            <ErrorMessage text={error} />
            <LoginForm setError={setError} />
        </>
    )
}