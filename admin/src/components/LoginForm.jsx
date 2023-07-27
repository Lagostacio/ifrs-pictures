const API_URL = import.meta.env.VITE_API_URL
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../AuthContext'


export const LoginForm = ({ setError }) => {

    const {setToken} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = ({ value }) => {
        setEmail(value)
    }

    const handlePasswordChange = ({ value }) => {
        setPassword(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit()
    }

    const submit = () => {

        // if(!email ||  !password)
        //     return 

        const submit = {
            email,
            password
        }

        axios.post(`${API_URL}/login`, submit)
            .then(res => {
                setToken(res.data.token)
                navigate('/photos')
            })
            .catch(err => setError(err.response.data.msg))
        
        setPassword('')
    }

    return (

        <form onSubmit={e => handleSubmit(e)} className='userForm'>
            <div >
                <span>Email:</span>
                <input type="email" value={email} onChange={({ target }) => handleEmailChange(target)} />
            </div>
            <div>
                <span>Password:</span>
                <input type="password" value={password} onChange={({ target }) => handlePasswordChange(target)} />
            </div>
            <input type="submit" value="Log in" />
        </form>
    )

}
