import './App.css'
import { useState } from 'react'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent:'space-evenly',
  border: 'solid 1px white',
  padding: '20px 10px',
  height: '75vh',
  width: '30vw'

}
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  width:'90%',
  height:'70%'
}


function App() {

  const [text, setText] = useState('')
  const [file, setFile] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!file) {
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
      <div style={containerStyle}>
        <h1>Envie sua foto!!!</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={formStyle}>
          <input type="file" onChange={e => handleFileChange(e)} />
          <input type="text" value={text} onChange={({ target }) => handleTextChange(target)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
