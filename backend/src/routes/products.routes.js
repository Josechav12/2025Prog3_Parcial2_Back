const {Router} = require("express");
const productosController = require("../controllers/products.controller");

const productosRoutes = Router();

productosRoutes.get("/get-productos", productosController.obtenerProductos);

modules.export = {productosRoutes};