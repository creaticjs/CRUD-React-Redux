import React, {Component} from 'react'
import {connect} from "react-redux"
import { Header } from 'semantic-ui-react'
import {mostrarProductos} from "../actions/productosActions"
import Producto from "./Producto"

class Productos extends Component{

    componentDidMount(){
        this.props.mostrarProductos();
    }

    render(){
        const{productos}= this.props
        return(
            <div>
                <Header as="h1" color='orange'>Lista de productos</Header>
                {
                    productos.map((producto, index)=>{
                        return(<Producto key={index} producto={producto}></Producto>)
                    })
                }
            </div>
        )
    }
}

const mapstateToProp = (state)=>{
    return{
        productos: state.productos.productos
    }
}

export default connect(mapstateToProp, {mostrarProductos}) (Productos)