import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoproductoAction } from "../actions/productoActions";

const NuevoProducto = ({ history }) => {
  //state del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  //useDispatch devuelve una funcion
  const dispatch = useDispatch();

  //acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  //mandar llamar el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoproductoAction(producto));

  //cuando haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    //revisar que no haya errores

    //crear nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    //redireccion
    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="Nombre Producto"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Precio Producto"></label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary d-block w-100"
                value="Agregar"
              />
            </form>
            {cargando ? <p>Cargando</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-2 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
