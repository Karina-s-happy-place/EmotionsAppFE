import React from "react";
import { Link } from "react-router-dom";
import { LogingRegisterButton } from "../components/buttons/LogingRegisterButton";
import { AddMoreExploreButton } from "../components/buttons/AddMoreExploreButton";


const Login = () =>{
  return (
    <div>
      <h1>Página de Login</h1>
      <Link to="/register">Ir al registro</Link><br />
      <Link to="/dashboard">Ir al dashboard</Link>
      <LogingRegisterButton text="Iniciar sesión" onClick={() => console.log("Login")} />
      <AddMoreExploreButton text="Explorar más" onClick={() => console.log("Explorar más")} />
    </div>
  );
}

export default Login;