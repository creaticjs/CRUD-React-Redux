import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, GUARDAR_PRODUCTO, EDITAR_PRODUCTO, MOSTRAR_PRODUCTO} from "../actions/types"

const estadoInicial = {
    productos: []
};

export default function (state = estadoInicial, action){
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {...state, productos: action.payload}
        case ELIMINAR_PRODUCTO:
            return {
                ...state, productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case GUARDAR_PRODUCTO:
            return {...state, productos: [... state.productos, action.payload]}
        case EDITAR_PRODUCTO:
        return{
            ...state, productos:state.productos.map(producto => producto.id === action.payload.id ?
                (producto = action.payload): producto)
        }
        case MOSTRAR_PRODUCTO:
            return {...state, producto: action.payload}
        default:
            return state;
    }
}