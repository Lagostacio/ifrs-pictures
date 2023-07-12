import ErrorMessage from "./ErrorMessage"
import { ListPhotos } from "./ListPhotos"
import { useState } from "react"

export const Photos = () => {
    const [error, setError] = useState('')
    
    return (
        <>
            <h1>Photos</h1>
            <ErrorMessage text={error}/>
            <ListPhotos setError={setError}/>
        </>
    )
}