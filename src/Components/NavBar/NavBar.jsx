import * as React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <ul>
            <li><a class="active" href="#home">Cadastro de usuários</a></li>
            <li><a href="#news">Usuários</a></li>
            <li><a href="#contact">Registro de Vacinação</a></li>
            <li><a href="#about">Cadastro de vacinas</a></li>
        </ul>
    )
}

export default NavBar