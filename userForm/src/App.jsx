import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [text,setText] = useState('')
  const [file,setFile] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    submit()
  }

  const handleTextChange = ({value}) => {
    setText(value)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
  
  const submit = async () => {
    
    const formData = new FormData()
    
    formData.append('file',file)
    formData.append('text',text)
    
    const res = await axios.post('/',formData)
    console.log(res)
  }


  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" onChange={e => handleFileChange(e)}/>
        <input type="text" value={text} onChange={({target})=>handleTextChange(target)}/>
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}

export default App
