import { useState } from 'react'
import axios from 'axios'

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUserChange = ({ value }) => {
        setUser(value)
    }

    const handlePasswordChange = ({ value }) => {
        setPassword(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit()
    }

    const submit = async () => {
        
        const submit = {
            user,
            password
        }

        try{
            await axios.post('http://127.0.0.1:4000/teste',submit)
            console.log('OK')
        }catch(err){
            console.log(err)
        }
    }


    return (
        <>
            <h1>Login</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={user} onChange={({ target }) => handleUserChange(target)} />
                <input type="password" value={password} onChange={({ target }) => handlePasswordChange(target)} />
                <input type="submit" value="Log in" />
            </form>
        </>
    )
}