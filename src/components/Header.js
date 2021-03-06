import React from 'react';

export const Header = () => {
  return (
    <header class="header" id="header">
      <nav class="contenedor-navegacion">
        <ul class="navegacion">
          <li><a href="#contactame" class="item-navegacion" >Contactame ahora</a> </li>
          <li><a class="item-navegacion" href="#perfil">Sobre mi</a></li>
          <li><a href="#proyectos" class="item-navegacion">Proyectos</a></li>
        </ul>        
        <div class="contenedor-menu-deslizable">
          <i class="menu-deslizable"></i>
        </div>
      </nav>
      <div class="hero-contenedor">
        <div class="titulo-pagina">
          <span>Hola</span>
          <br></br>
          <span>Soy Victor Arreaga</span>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
        <path fill="#fff" fill-opacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,176C480,203,600,245,720,229.3C840,213,960,139,1080,101.3C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </header>
  )
}
