import { Router } from "express";
const router = Router();
import { vistaProductos } from "../controllers/view.controllers.js";
import { requireLogin } from "../middlewares/middlewares.js";

//rutas de las vistas
router.get("/", requireLogin, vistaProductos); 

router.get("/dashboard", requireLogin, vistaProductos);

router.get("/consultar", requireLogin,(req, res) => {
    res.render("consultar");
})

router.get("/crear", requireLogin,(req, res) => {
    res.render("crear");
})

router.get("/modificar", requireLogin,(req, res) => {
    res.render("modificar");
})

router.get("/eliminar", requireLogin,(req, res) => {
    res.render("eliminar");
})
router.get("/login", (req, res) => {
    res.render("login");
});

// Exportamos el router con las rutas de vistas
export default router;