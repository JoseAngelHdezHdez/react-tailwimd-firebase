import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import { useEffect, useState } from "react";
import { login } from "../services/userServices";

const Login = () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123456789');

  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await login({email, password})
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Ingrese un correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Ingrese contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
};
export default Login;
