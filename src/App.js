import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getInfoClinic, getProcedimientos, getSetting } from "./redux/actions";

import "bootstrap/dist/css/bootstrap.css";
import "./scss/App.scss";

import Layout from "./components/layout";
import Agenda from "./pages/agenda";
import Configuracion from "./pages/configuracion";
import Pacientes from "./pages/pacientes";
import Reportes from "./pages/reportes";
import Ventas from "./pages/ventas";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoClinic());
    dispatch(getProcedimientos());
    dispatch(getSetting());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Pacientes} />
          <Route exact path="/pacientes" component={Pacientes} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/configuracion" component={Configuracion} />
          <Route path="/reportes" component={Reportes} />
          <Route path="/ventas" component={Ventas} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
