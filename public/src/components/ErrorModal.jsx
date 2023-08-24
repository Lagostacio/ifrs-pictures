
export const ErrorModal = ({ isOpen, setIsOpen, text }) => {

    // useEffect(() => {
    //     if (isOpen) {
    //         setTimeout(() => {
    //             setIsOpen(false);
    //         }, 5000);
    //     }
    // }, [isOpen])

    return (
        <div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full  flex justify-center items-start z-50 pt-8">
                    <div className={`bg-white p-4 rounded border-2 border-secondary-200 shadow-xl z-20 relative`}>
                        <button
                            className="absolute top-0 right-0 mr-2 text-gray-600 hover:text-gray-800"
                            onClick={()=>setIsOpen(false)}
                        >
                            x
                        </button>
                        <p className={`text-secondary-500`}>{text}</p>
                    </div>
                </div>
            )}
        </div>
    );

}
