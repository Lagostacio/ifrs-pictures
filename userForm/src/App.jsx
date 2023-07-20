import './App.css'
import { useState } from 'react'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const formStyle = {
  display:'flex',
  flexDirection:'column'
}


function App() {

  const [text, setText] = useState('')
  const [file, setFile] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!file){
      return alert('select a file before uploading!!!')
    }
    
    const formData = new FormData();

    formData.append('file', file);
    formData.append('text', text)

    axios.post(`${API_URL}/photos`, formData)
      .then(res => {
        console.log(res)
        alert(res.data)
      })
      .catch(err => console.log(err))

  }

  const handleTextChange = ({ value }) => {
    setText(value)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }


  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data" style={formStyle}>
        <input type="file" onChange={e => handleFileChange(e)} />
        <input type="text" value={text} onChange={({ target }) => handleTextChange(target)} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
