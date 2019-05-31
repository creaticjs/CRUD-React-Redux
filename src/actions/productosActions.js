import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO,GUARDAR_PRODUCTO, MOSTRAR_PRODUCTO} from "./types"

import axios from "axios"
const URL = 'https://my-json-server.typicode.com/YeferzonQuisoboni/productosNetlify';

axios.defaults.baseURL = URL;

export const mostrarProductos = () => async dispatch => {
    //const respuesta = await axios.get("http://localhost:5000/productos")
    const respuesta = await axios.get("/productos")
    //console.log(respuesta)
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const guardarProducto = producto => async dispatch => {
    //const respuesta = await axios.post("http://localhost:5000/productos",producto);
    const respuesta = await axios.post("/productos",producto);
    //console.log(respuesta);
    dispatch({
      type: GUARDAR_PRODUCTO,
      payload: respuesta.data
    });
};

export const eliminarProducto = id => async dispatch => {
  //console.log(id)
  // await axios.delete(`http://localhost:5000/productos/${id}`);
  await axios.delete(`/productos/${id}`);
  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: id
  });
}

export const mostrarProducto = id => async dispatch => {
  //console.log("id: ",id)
  //const respuesta = await axios.get(`http://localhost:5000/productos/${id}`);
  const respuesta = await axios.get(`/productos/${id}`);
  //console.log(respuesta)
  dispatch({
      type: MOSTRAR_PRODUCTO,
      payload: respuesta.data
  })
}


export const editarProducto = producto =>async dispatch => {
  //console.log(producto)
  //const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto);
  const respuesta = await axios.put(`/productos/${producto.id}`, producto);
  //console.log(respuesta)
  dispatch({
      type: EDITAR_PRODUCTO,
      payload: respuesta.data
  })
}


