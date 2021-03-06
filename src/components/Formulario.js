import React, {useState} from 'react'
import {db} from '../firebase';
import {toast} from 'react-toastify';

export const Formulario = () => {

  const contacto = {
    nombre: "",
    correo: "",
    mensaje: ""
  };

  const [valor, setValor] = useState(contacto);
  const enviar = e => {
    e.preventDefault();    
    if(comprobarCorreo() || valor.nombre.charAt(0) > 0){
      enviarFirebase();
      setValor({...contacto});
    }else {
      
      let mensaje = 'Por favor, ingresa una dirección de correo electrónico válida';
      if(tieneTexto(valor.nombre)){
        mensaje = 'Por favor, ingresa tu nombre';
      }
      if(tieneTexto(valor.mensaje)){
        mensaje = 'Por favor, ingresa un mensaje';
      }

      toast(mensaje, {type:'error', autoClose: 2000});
    }

  };
  const tieneTexto = campo => {
    return !campo.charAt(0) > 0;
  }
  const comprobarCorreo = () => {
    return /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/.test(valor.correo);
  }
  
  const enviarFirebase = async () => {
    await db.collection("contacto").doc().set(valor);
    toast('Se ha enviado el mensaje', {type:'success', autoClose: 2000});;    
  };

  const eventoTeclado = e => {    
    const { name, value } = e.target;    
    setValor({ ...valor, [name]: value });    
  }

  return (
    <form class="formulario" id="contactame" onSubmit={enviar}>
      <div class="detalles">
        <h1 class="titulo">Contáctame</h1>
        <label for="">Nombre</label>
        <input type="text" name="nombre" id=""  value={valor.nombre} onChange={eventoTeclado}/>
        <label for="">Correo</label>
        <input type="text" name="correo" id="" value={valor.correo}  onChange={eventoTeclado}/>
        <label for="">Mensaje</label>
        <textarea id="" cols="5" rows="40" name="mensaje" value={valor.mensaje}  onChange={eventoTeclado}></textarea>
      </div>
    <div class="contenedor-boton">
      {/* <a href="#" class="boton-formulario">Enviar</a> */}
      <button type='submit' class="boton-formulario">Enviar</button>
    </div>
  </form>

  )
}
