import React from 'react';
import {Provider} from "react-redux"
import store from "./store"
import Productos from "./components/Productos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import MenuExampleInverted from "./components/MenuExampleInverted"
import NoRouter from "./components/NoRouter";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

class App extends React.Component{
  render(){
    return(
    <Container>
      <Provider store={store}>
      <Header as="h1"></Header>
      <BrowserRouter>
          <MenuExampleInverted></MenuExampleInverted>
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/productos/nuevo" component={NuevoProducto} />
          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          <Route component={NoRouter}/>
        </Switch>
      </BrowserRouter>
      </Provider>
    </Container>
    );
  }
}

export default App;
