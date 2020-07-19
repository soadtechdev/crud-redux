import React from "react";
import { Link, useHistory } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import {
  borrarProductoAtion,
  obtenerProductoEditar,
} from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory();

  //confirmar si desea eleminiar
  const confirmarEliminarProducto = (id) => {
    //pasarlo al action
    dispatch(borrarProductoAtion(id));
  };

  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>$ {precio}</td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          onClick={() => confirmarEliminarProducto(id)}
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
