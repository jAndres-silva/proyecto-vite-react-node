// importar conexion a la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ProductoModel = db.define('productos', {
    id_producto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.TEXT},
    precio: {type: DataTypes.NUMBER}
    
});

export default ProductoModel