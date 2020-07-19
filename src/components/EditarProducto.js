import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";
import { useHistory } from "react-router-dom";

const EditarProducto = () => {
  //state local
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const productoEditar = useSelector((state) => state.productos.productoEditar);

  useEffect(() => {
    setProducto(productoEditar);
  }, [productoEditar]);

  const onChangeFormulario = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = productoEditar;

  const submitEditarProducto = (e) => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label htmlFor="Nombre Producto"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={producto.nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Precio Producto"></label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="precio Producto"
                  name="precio"
                  value={producto.precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary d-block w-100"
                value="Guardar Cambios"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
