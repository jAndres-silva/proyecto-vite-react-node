import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/productos/";

const CompEditProducto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
    });
    navigate();
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setDescripcion(res.data.descripcion);
    setPrecio(res.data.precio);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <div>
        <h3>Editar productos</h3>
        <form onSubmit={update}>
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
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompEditProducto;
