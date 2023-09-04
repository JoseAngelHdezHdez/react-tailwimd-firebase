import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserProvider"
const Navbar = () => {
    const {setUser} = useUserContext();
    return (
        <nav>
            <NavLink to="/">Inicio</NavLink> |
            <button onClick={() => setUser(false)}>Logout</button>
        </nav>
    )
}
export default Navbar