const API_URL = import.meta.env.VITE_API_URL
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from "../AuthContext"
import { useNavigate } from 'react-router-dom'

export const ListPhotos = ({ setError }) => {
    const navigate = useNavigate()
    const { token, setToken } = useAuth()


    const imgPath = `${API_URL}/img/`
    const [photos, setPhotos] = useState([])


    useEffect(() => {

        if (!token)
            navigate('/login')


        axios.get(`${API_URL}/photos`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(res => setPhotos(res.data))
            .catch(err => {
                setError(err.response.data)
                if (err.response.status == 401) {
                    setToken('')
                    navigate('/login')
                }
            })

    }, [])

    const sendPhoto = ({ _id, text }, status) => {

        if (!confirm(`do you really wish to ${status} ${text}?`)) 
            return

        const data = {
            _id,
            status: status == 'approve' ? 1 : 0
        }
        console.log(data)
        axios.put(`${API_URL}/photos`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(() => {
                setPhotos(photos.filter(photo => photo._id != _id))
                setError('')
            })
            .catch((error) => {
                setError(error.response.data)
            })
    }

    return (

        <div>
            {
                photos.length > 0 && photos.map(photo => {
                    return (
                        <div key={photo._id} className='photoStyle'>
                            <img className='photo' src={imgPath + photo.filename} />
                            <span>{photo.text}</span>
                            <div>
                                <button onClick={() => sendPhoto(photo, 'approve')} className="ok">Ok</button>
                                <button onClick={() => sendPhoto(photo, 'deny')} className="deny">X</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}