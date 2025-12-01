import { createTicket } from "../controllers/tickets.controller.js";
import { Router } from "express";

const router = new Router();

router.post("/create", createTicket);

export default router;