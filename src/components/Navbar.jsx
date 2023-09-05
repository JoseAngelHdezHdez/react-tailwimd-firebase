import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserProvider"
import { logout } from "../services/userServices";
const Navbar = () => {
    const {setUser} = useUserContext();

    const handleClicklLogout = async() => {
        try {
            await logout();
        } catch (error) {
            console.log(error.code);
        }
    }
    return (
        <nav>
            <NavLink to="/">Inicio</NavLink> |
            <button onClick={handleClicklLogout}>Logout</button>
        </nav>
    )
}
export default Navbar