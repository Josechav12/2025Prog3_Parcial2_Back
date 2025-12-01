import ticketModel from "../models/ticket.models.js"

export const createTicket = async (req, res) => {
    try {
        const {nombre, precio, productos} = req.body;

        if(!nombre || !precio || !productos) {
            return res.status(400).json({
                message: "Datos invalidos, asegurate de enviar todos los campos."
            });
        }

        let [result] = await ticketModel.insertTicket(nombre, precio, new Date());
        let idTicket = result.insertId

        productos.forEach(async idProd =>  {
            [result] = await ticketModel.insertProdTicket(idTicket, idProd);
        });

        res.status(201).json({
            message: "Ticket creado con exito",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error interno en el servidor",
            error: error
        })
    }
}