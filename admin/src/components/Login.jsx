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
        const formData = new FormData()
        formData.append('user',user)
        formData.append('password',password)
        
        try{
            await axios.post('/login',formData)
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