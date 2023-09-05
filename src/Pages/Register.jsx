import { useState } from "react";
import { useUserContext } from "../context/UserProvider";
import { register } from "../services/userServices";
// import { register } from "../config/firebase";

const Register = () => {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("123456789");

  const {user, setUser} = useUserContext()

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('procesar', email, password);
    try {
        await register({email, password});
    } catch (error) {
        console.log(error.code);
    }
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Ingrese un correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Ingrese una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};
export default Register;
