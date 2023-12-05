import React from "react";
import "./acceso.css";
import registerimg from "../../assets/Images/register-preview.png";

function MessageWelcome({ user, setUser }) {
  const handleLogout = () => {
    setUser([]);
  };
  return (
    <>
      <h1>¡Bienvenido/a de nuevo, {user}!</h1>
      <div className="orden">
        <div className="emotivo">
          <img
            alt="emoticon inicio de sesion"
            src={registerimg}
            className="emoticon"
          ></img>
        </div>
        <div  className="boton">
          <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>
      </div>
    </>
  );
}

export default MessageWelcome;
