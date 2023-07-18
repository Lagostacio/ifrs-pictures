
export const Card = ({src,text})=>{
    return (
        
        <div className='card'>
            <img src={src} alt="fotinha" className='img'/>
            <span className='text' >{text}</span>
        </div>
    )
}