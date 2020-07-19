import React from "react";

const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form>
              <div className="form-group">
                <label htmlFor="Nombre Producto"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Precio Producto"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="precio Producto"
                  name="precio"
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
