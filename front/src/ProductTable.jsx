import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./productTable.css";

const URI = "http://localhost:8000/productos/";

const CompShowProducto = () => {
  const [productos, setProducto] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  // procedimiento para mostrar todos los productos
  const getProductos = async () => {
    const res = await axios.get(URI);
    setProducto(res.data);
  };

  // procedimiento para eliminar un producto
  const deleteProducto = async (id_producto) => {
    axios.delete(`${URI}${id_producto}`);
    getProductos();
  };
  return (
    <div className="container-fluid main-content">
      <div className="row">
        <div className="col">
        <Link to="/create" className="btn btn-primary mt-2 mb-2">
    <span style={{fontWeight: 'bold'}}>Agregar Producto</span>
  </Link>
          <table className="product-table">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id_producto}>
                  <td> {producto.id_producto}</td>
                  <td> {producto.nombre}</td>
                  <td> {producto.descripcion}</td>
                  <td> {producto.precio}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={`/edit/${producto.id_producto}`}
                        className="btn btn-info"
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Link>
                      <button
                        onClick={() => deleteProducto(producto.id_producto)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowProducto;
