const API_URL = import.meta.env.VITE_API_URL
import { useState } from 'react'
import axios from 'axios'
import { Header, SuccessModal, ErrorModal } from '../components'
import { CloudArrowUp } from '@phosphor-icons/react'

export const Form = () => {
    const [isSuccessful, setSuccess] = useState(false);
    const [hasError,setError] = useState(false)
    const [errorText,setErrorText] = useState('')
    const [image, setImage] = useState(null)
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
                setSuccess(true)
                setImage(null)
                setText('')
                setFile({})
            })
            .catch(
                err => {setError(true),setErrorText(err?.response?.data)}
            )

    }

    const handleTextChange = ({ value }) => {
        setText(value)
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])

        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }


    return (

        <>
        <SuccessModal isOpen={isSuccessful} setIsOpen={setSuccess} text='Sua foto foi enviada!! Aguarde sua aprovação.' color='primary'/>
        <ErrorModal isOpen={hasError} setIsOpen={setError} text={errorText} />
            
            <div className='bg-lime-50 h-full w-screen flex flex-col items-center '>
                <Header />
                <div className=' flex flex-col justify-around pb-24 items-center h-full rounded-md my-2 border-solid border-2 border-green-700 bg-slate-100 opacity-95 w-1/2 '>

                    <h1 className='text-6xl'>Envie sua foto!!!</h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-row px-6  justify-center items-center w-full flex-wrap h-2/5 '>

                        <div className='flex flex-row my-4 w-full items-end h-1/2'>
                            <div className="w-full mx-2 ">
                                <label htmlFor="arquivo" className="mb-1 block text-sm font-medium text-gray-700">Selecione sua foto</label>
                                <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-500 p-6 transition-all hover:border-primary-500">
                                    <div className="space-y-1 text-center">
                                        <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                            <CloudArrowUp size={32} />
                                        </div>
                                        <div className="text-gray-600">Você pode arrastar e soltar sua foto aqui para adicioná-la.</div>
                                        <p className="text-sm text-gray-500">SVG, PNG ou JPG </p>
                                    </div>
                                    <input type="file" id='arquivo' onChange={e => handleFileChange(e)} className="sr-only" />
                                </label>
                            </div>
                            {image  && <img alt="preview image" className='w-1/5 h-full' src={image} />}

                        </div>


                        <div className='flex flex-row justify-center items-end w-full'>
                            <div className="w-4/5 mx-2 " >
                                <label htmlFor="textarea" className="mb-1 block text-sm font-medium text-gray-700">Envie uma mensagem com sua foto!</label>
                                <textarea id="textarea" value={text} onChange={({ target }) => handleTextChange(target)} className="h-full block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50" rows="3" placeholder="Deixe sua mensagem!"></textarea>
                            </div>

                            <div className='w-1/5 flex  justify-start'>
                                <button type="submit" className="h-full rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">
                                    Enviar
                                </button>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}