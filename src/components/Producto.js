import React from "react";
import { Link } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { borrarProductoAtion } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  //confirmar si desea eleminiar
  const confirmarEliminarProducto = (id) => {
    //preguntar al usuario

    //pasarlo al action
    dispatch(borrarProductoAtion(id));
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>$ {precio}</td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary">
          Editar
        </Link>
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
