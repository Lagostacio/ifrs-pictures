
const ErrorMessage = ({ text }) => {
    
    return (
        <h2 className={text == '' ? '' : 'deny'}>
            {text}
        </h2>
    )
}

export default ErrorMessage