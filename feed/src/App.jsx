const API_URL = import.meta.env.VITE_API_URL
import { Card } from './components/'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [photos,setPhotos] = useState([])

  const getPhotos = async () => {
    const request = await axios.get(`${API_URL}/photos`)
    setPhotos(request.data)
  }

  useEffect(()=>{
    getPhotos()
  },[])
  
  return (
    <>
      <h1 className='title'>IFRS-Pictures!!!</h1>
      <div className='container'>
      {
        photos.length > 0 && photos.map((photo,index)=>{
          return(
            <Card key={index} src={`${API_URL}/img/${photo.filename}`} text={photo.text}/>
          )
        })
      }

      </div>
    </>
  )
}

export default App
