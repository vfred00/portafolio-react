import React from 'react'

export const Comentarios = () => {
  return (
    <section id="comentarios" class="seccion-comentario">

      <h1 class="titulo-comentarios">Opiniones sobre mi</h1>
      <div class="contenedor-comentarios">
        <article class="comentario-usuario">
          <div class="imagen-usuario"></div>
          <div class="contenido-usuario">
            <h1 class="nombre-usuario">Deyvis Mamani</h1>
            <h2 class="usuario-trabajo">web developer</h2>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </article>
        <article class="comentario-usuario">
          <div class="imagen-usuario"></div>
          <div class="contenido-usuario">
            <h1 class="nombre-usuario">Victor Arreaga</h1>
            <h2 class="usuario-trabajo">web developer</h2>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
