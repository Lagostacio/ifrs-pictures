import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export const LoginForm = ({ setError }) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

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

    const submit = () => {

        const submit = {
            user,
            password
        }

        axios.post(`${API_URL}/login`, submit)
            .then(res => navigate('/photos'))
            .catch(err => setError(err.response.data))

    }

    return (

        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={user} onChange={({ target }) => handleUserChange(target)} />
            <input type="password" value={password} onChange={({ target }) => handlePasswordChange(target)} />
            <input type="submit" value="Log in" />
        </form>
    )

}
