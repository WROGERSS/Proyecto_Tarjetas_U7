
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";    
import Footer from "./Components/Footer/Footer";
import DesignCards from "./Components/Cards/DesignCards"     // Tarjetas visualizadas de forma estatica 
import Acceso from "./Components/Login/Acceso";          //Formulario para Iniciar Sesion
import Home from "./Components/Pages/Home"
import ConsultApi from "./Components/API/ConsultApi";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="moviecards" element={<DesignCards/>} />
        <Route path="listseries" element={<ConsultApi />} />
        <Route path="sesion" element={< Acceso />} />
        </Routes>
      <Footer />
    </>
  );
}
export default App;
