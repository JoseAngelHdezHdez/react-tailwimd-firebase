import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const {user, setUser} = useUserContext();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user])
    return (
        <>
            <h1>Login</h1>
            <button onClick={() => setUser(true)}>Acceder</button>
        </>
    )
}
export default Login;