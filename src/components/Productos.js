import React, { useEffect } from "react";
import Producto from "./Producto";
//redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //consultar la api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
    //eslint-disable-next-line
  }, []);

  //obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error && <p className="alert alert-danger mt-4">Hubo un error</p>}
      {cargando && <p>Cargando...</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Productos;
