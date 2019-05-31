import React, {Component} from 'react'
import { Button, Image, List, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {eliminarProducto} from "../actions/productosActions"

class Producto  extends Component{

    productoSeleccionado = () => {
        const {producto} = this.props
        this.props.eliminarProducto(producto.id)
    }

    render() {
        const { producto } = this.props;
        return (
            <Segment>
                <List divided verticalAlign='middle'>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button  color='red' onClick={this.productoSeleccionado}>Eliminar</Button>
                        <Link to={`productos/editar/${producto.id}`}>
                            <Button color='green'>Editar</Button>
                        </Link>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                    <List.Content>
                        <List.Header>{producto.nombre}</List.Header>
                        $ {producto.precio}
                    </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default connect (null, {eliminarProducto})(Producto);