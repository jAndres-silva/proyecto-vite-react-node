import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/productos/";

const CompCreateProducto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();

  //procedimiento de guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
    });
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "100vh", paddingTop: "50px" }}>
      <div>
        <h3>Agregar productos</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
  
};

export default CompCreateProducto;
