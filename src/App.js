import {Header} from './components/Header';
import {Perfil} from './components/Perfil';
import {Estudios} from './components/Estudios';
import {Conocimientos} from './components/Conocimientos';
import {Proyectos} from './components/Proyectos';
import {Comentarios} from './components/Comentarios';
import {Formulario} from './components/Formulario';
import {Footer} from './components/Footer';
import './firebase';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
     <Header/>
     <Perfil/>
     <Estudios/>
     <Conocimientos/>
     <Proyectos/>
     <Comentarios/>
     <Formulario/>
     <Footer/>     
     <ToastContainer/>
    </>
  );
}

export default App;
