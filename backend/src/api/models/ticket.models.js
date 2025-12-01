import connection from "../database/db.js"; // Importamos la conexion a la BBDD

const selectAllTickets = async (req, res) => {
    const sql = "SELECT * FROM tickets";

    return await connection.query(sql);
}

// Insertar un nuevo ticket
const insertTicket = (name,price,date) => {
    let sql = `INSERT INTO tickets (nombreUsuario, precioTotal, fechaEmision) VALUES (?, ?, ?)`;
    return connection.query(sql, [name, price, date]);
}

const insertProdTicket = (idTicket, idProducto) => {
    let sql = `INSERT INTO productos_tickets (idProducto, idTicket) VALUES (?, ?)`;
    return connection.query(sql, [idProducto, idTicket]);
}

export default {
    selectAllTickets,
    insertTicket,
    insertProdTicket
}
