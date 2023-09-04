import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import Navbar from "../components/Navbar";

const Private = () => {
    const {user} = useUserContext();
    return (
        <>
            <Navbar />
            {user ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}
export default Private;