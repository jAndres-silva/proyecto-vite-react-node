import express from "express";
import cors from "cors";
// importamos conexion a la base de datos
import db from "./database/db.js";
//importamos enrutador
import productoRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/productos",productoRoutes);

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
    
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo!</h1>");
});

app.listen(8000, () => {
  console.log("Servidor corriendo en http://localhost:8000");
});
