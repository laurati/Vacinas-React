
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormularioUsu from "../FormularioUsu/FormularioUsu"
import Graficos from "../Graficos/Graficos";
import NavBar from "../NavBar/NavBar";
import TabelaUsu from "../TabelaUsu/TabelaUsu";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={NavBar} exact path="/navBar" />
        <Route component={FormularioUsu} exact path="/formularioUsu" />
        <Route component={FormularioUsu} exact path="/"/>
        <Route component={TabelaUsu} exact path="/tabelaUsu" />
        <Route component={Graficos} exact path="/graficos" />
        
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;