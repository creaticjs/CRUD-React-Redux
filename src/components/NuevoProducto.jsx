import React, { Component } from "react";
import { Button, Form, Header,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { guardarProducto } from "../actions/productosActions";
class NuevoProducto extends Component {
  state = { nombre: "", precio: 0 };

  changeInput = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  guardarCambios = (e) => {
    e.preventDefault();
    console.log("guardando el producto");
    this.props.guardarProducto(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
    <Form>
      <Header as="h2" color='orange'>Agregar Producto</Header>
      <Form.Field>
        <label>Nombre Producto</label>
        <input placeholder='Nombre Producto' onChange={this.changeInput} name="nombre" type="text"/>
      </Form.Field>
      <Form.Field>
        <label>Precio Producto</label>
        <input placeholder='Precio Producto' onChange={this.changeInput} name="precio" type="number"/>
      </Form.Field>
      <Button color='teal' onClick={this.guardarCambios}>Guardar Producto  <Icon name='save' size='small'/></Button>
      <Link to={'/'}>
        <Button color='yellow'>Cancelar</Button>
      </Link>
    </Form>
    );
  }
}

export default connect(
  null,
  { guardarProducto }
)(NuevoProducto);