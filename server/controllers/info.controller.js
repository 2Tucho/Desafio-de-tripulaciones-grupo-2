const user = require('../models/info.model.js'); // Importar el modelo de la BBDD

/********************* GET *********************/

// GET http://localhost:5000/api/info/datosPersonales?dni=87654321B
const getPersonalData = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getPersonalData(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

// GET http://localhost:5000/api/info/servicios?dni=13579246C
const getServices = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getServices(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

// GET http://localhost:5000/api/info/interacciones?dni=13579246C
const getInteractions = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getInteractions(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

// GET http://localhost:5000/api/info/contratos?dni=13579246C
const getContractedCampaigns = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getContractedCampaigns(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};


/********************* POST *********************/

/* {
    "id_factura": 2,
    "fecha": "16/3/2024",
    "motivo": "Ofertas",
    "comentarios": "Propuesta de un campamento de verano en Laredo (Cantabria)",
} */
// POST http://localhost:5000/api/info/interacciones
const postInteractions = async (req, res) => {
    const newEntry = req.body; // { id_factura, fecha, motivo, comentarios }
    const response = await user.postInteractions(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const getUsers = async (req, res) => {
    const users = await user.getUsers();
    res.status(200).json(users);
}

const getAvisos = async (req, res) => {
    const users = await user.getAvisos();
    res.status(200).json(users);
}

const updateServices = async (req, res) => {
    const modifiedServices = req.body; 
    const response = await user.updateServices(modifiedServices); // {id_interes: 79, interesado: false}
    res.status(200).json("items_updated");
}

module.exports = {
    getPersonalData,
    getServices,
    getInteractions,
    getContractedCampaigns,
    postInteractions,
    getUsers,
    getAvisos,
    updateServices
}