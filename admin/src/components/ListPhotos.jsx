const API_URL = import.meta.env.VITE_API_URL
import { useState, useEffect } from 'react'
import axios from 'axios'

export const ListPhotos = ({ setError }) => {
    const photoStyle = {
        border: 'solid 1px purple',
        display: 'flex',
        width: '50vw',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius:'8px',
    }
    const imgPath = '/img/'
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/photos`)
            .then(res => setPhotos(res.data))
            .catch(err => console.error(err))
    }, [])

    const sendPhoto = ({ id, text }, status) => {

        if (!confirm(`do you really wish to ${status} ${text}?`)) return

        const data = {
            id,
            status: status == 'approve' ? 1 : 0
        }

        axios.put(`${API_URL}/photos`, data)
            .then(() => {
                setPhotos(photos.filter(photo => photo.id != id))
                setError('')
            })
            .catch((error) => setError(error.response.data))
    }

    return (

        <div>
            {
                photos.length > 0 && photos.map(photo => {
                    return (
                        <div key={photo.id} style={photoStyle}>
                            <img className='photo' src={imgPath + photo.img} />
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