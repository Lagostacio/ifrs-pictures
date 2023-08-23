

export const Modal = ({ isOpen, setIsOpen }) => {

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen && (
                 <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                 <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full z-10" onClick={closeModal}></div>
                 <div className="bg-white p-4 rounded shadow-lg z-20 relative">
                   <span
                     className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                     onClick={closeModal}
                   >
                     &times;
                   </span>
                   <p>This is the modal content.</p>
                 </div>
               </div>
            )}
        </div>
    );

}
