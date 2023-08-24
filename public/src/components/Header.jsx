import { NavLink } from "react-router-dom";


export const Header = () => (
    <div className="bg-primary-600 w-screen h-32 text-white text-4xl flex justify-between items-center px-10 border-solid border-b-2 border-primary-700">
        <NavLink to="/feed">
            <button className="border-b-2 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
                Ver Fotos
            </button>
        </NavLink>
        <NavLink to="/">
            <button className="border-b-2 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
                <span>Envie sua foto!!</span>
            </button>
        </NavLink>
    </div>
)