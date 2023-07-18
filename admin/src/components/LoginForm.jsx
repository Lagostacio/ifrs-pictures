import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export const LoginForm = ({ setError }) => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

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

        <form onSubmit={e => handleSubmit(e)} style={formStyle}>
            <div>
                <span>Username:</span>
                <input type="text" value={user} onChange={({ target }) => handleUserChange(target)} />
            </div>
            <div>
                <span>Password:</span>
                <input type="password" value={password} onChange={({ target }) => handlePasswordChange(target)} />
            </div>
            <input type="submit" value="Log in" />
        </form>
    )

}
