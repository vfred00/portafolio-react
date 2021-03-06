import React from 'react'

export const Estudios = () => {
  return (
    <section id="estudios" class="seccion-estudios">

      <div class="contenedor-estudios-realizados">
        <div class="detalles">
          <h1 class="titulo">Estudios realizados</h1>
          <table class="tabla">
            <thead>
              <tr>
                <th>Titulo 1</th>
                <th>Titulo 2</th>
                <th>Titulo 3</th>
              </tr>
            </thead>
            <tr>
              <th>Bahillerato</th>
              <th>Universidad</th>
              <th>Universidad</th>
            </tr>
            <tr>
              <th>Bahillerato</th>
              <th>Universidad</th>
              <th>Universidad</th>
            </tr>
            <tr>
              <th>Bahillerato</th>
              <th>Universidad</th>
              <th>Universidad</th>
            </tr>
          </table>
        </div>
        <div class="imagen-estudios-realizados"></div>
      </div>

      <div class="contenedor-mis-estudios">
        <div class="detalles">
          <h1 class="titulo">Mis estudios</h1>
          <p>POO, ADOO, Arquitectura del Software, Patrones de Diseño, Linux, Java, HTML, CSS y JS</p>
        </div>
        <div class="imagen-mis-estudios"></div>
      </div>


    </section>
  )
}
