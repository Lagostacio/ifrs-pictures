import { useEffect } from "react";


export const SuccessModal = ({ isOpen, setIsOpen, text  }) => {

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 5000);
        }
    }, [isOpen])

    return (
        <div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start z-50 pt-8">
                    <div className="bg-black opacity-0 fixed top-0 left-0 w-full h-full z-10"></div>
                    <div className={`bg-white p-4 rounded border-2 border-primary-200 shadow-xl z-20 relative`}>
                        <p className={`text-primary-500`}>{text}</p>
                    </div>
                </div>
            )}
        </div>
    );

}
