import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
  return (
    <div>
      <h1>Página de Login</h1>
      <Link to="/register">Ir al registro</Link><br />
      <Link to="/dashboard">Ir al dashboard</Link>
    </div>
  );
}

export default Login;