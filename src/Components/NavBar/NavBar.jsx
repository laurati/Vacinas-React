import * as React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <li className="alt"><Link to="formularioUsu">Cadastro de usuários</Link></li>
            <li className="alt"><Link to="tabelaUsu">Usuários</Link></li>
            <li className="alt">Registro de Vacinação</li>
            <li className="alt">Cadastro de vacinas</li>
            <li className="alt"><Link to="graficos">Gráficos</Link></li>
        </ul>
    )
}

export default NavBar