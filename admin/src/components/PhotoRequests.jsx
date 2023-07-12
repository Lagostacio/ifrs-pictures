import { useState, useEffect } from 'react'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export const PhotoRequests = () => {

    const imgPath = '/img/'
    const [photos, setPhotos] = useState([])

    useEffect(()=>{
        axios.get(`${API_URL}/photos`) 
            .then(res => setPhotos(res.data))
            .catch(err => console.error(err))
    },[])

    const sendPhoto = ({ id, text }, status) => {

        if(!confirm(`do you really wish to ${status} ${text}?`)) return

        const data = {
            id,
            status: status == 'approve' ? 1 : 0
        }

        axios.put(`${API_URL}/photos`, data)
            .then(() => {
                setPhotos(photos.filter(photo => photo.id != id ))
            })
            .catch((error) => alert(error.message))
    }

    return (
        <>
            <h1>PhotoRequests</h1>
            <div>
                {
                    photos.length > 0 && photos.map(photo => {
                        return (
                            <div key={photo.id}>
                                <img className='photo' src={imgPath + photo.img} />
                                <span>{photo.text}</span>
                                <button onClick={() => sendPhoto(photo, 'approve')} className="ok">Ok</button>
                                <button onClick={() => sendPhoto(photo, 'deny')} className="deny">X</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}