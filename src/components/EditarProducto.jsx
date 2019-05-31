import React, { Component } from "react";
import { Button, Form, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { mostrarProducto, editarProducto } from "../actions/productosActions";

class EditarProducto extends Component {
  state = {
    nombre: "",
    precio: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.mostrarProducto(id).then(result => {
      console.log(this.props.producto);
      const { nombre, precio } = this.props.producto;

      this.setState({
        nombre: nombre,
        precio: precio
      });
    });
  }

  changeInput = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  actualizarProducto = e => {
    e.preventDefault();
    const { nombre, precio } = this.state;
    const { id } = this.props.match.params;

    let productoEditado = {
      id,
      nombre,
      precio
    };

    this.props.editarProducto(productoEditado);
    this.props.history.push("/");
  };

  render() {
    const { nombre, precio } = this.state;
    return (
      <Form>
      <Header as="h2"  color='orange'>Actualizar Producto</Header>
      <Form.Field>
        <label>Nombre Producto</label>
        <input placeholder='Nombre Producto' value={nombre} onChange={this.changeInput} name="nombre" type="text"/>
      </Form.Field>
      <Form.Field>
        <label>Precio Producto</label>
        <input placeholder='Precio Producto' value={precio} onChange={this.changeInput} name="precio" type="number"/>
      </Form.Field>
      <Button color='teal' onClick={this.actualizarProducto}>Actualizar</Button>
      <Link to={'/'}>
        <Button color='yellow'>Cancelar</Button>
      </Link>
    </Form>
    );
  }
}

const mapstateToProp = state => ({
  productos: state.productos.productos,
  producto: state.productos.producto
});

export default connect(
  mapstateToProp,
  { mostrarProducto, editarProducto }
)(EditarProducto);
