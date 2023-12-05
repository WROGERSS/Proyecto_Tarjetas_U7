import React from "react";
import { useState } from "react";
import "./acceso.css";

function FormLogin({ setUser }) {

  const [contraseña, setContraseña] = useState("")
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser([nombre]);
  };

  return (
    
      <div className="principal">
        <h1>Login</h1>
        <div className="contenedorlogin">
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="pruebas">
              <label htmlFor="name"></label>
              <input
              id="name"
              type="text"
              aria-label="Username"
              placeholder="Nombre"
              autoComplete="off"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              />          
                              
             <label htmlFor="password"></label>
             <input
             id="password"
             type="password"
             aria-label="Password"
             placeholder="Password"
             autoComplete="off"
             value={contraseña}
             onChange={(e) => setContraseña(e.target.value)}
             />
                  
             <button>Iniciar Sesion</button>
             
            </div>

          </form>
          <div className="obligatorio">
          {error && <h5>Digitar todos los Campos es Obligatorio</h5>}
          </div> 
             
        </div>
      </div>
    
  );
}

export default FormLogin;
