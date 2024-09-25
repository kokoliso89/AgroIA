// config.js
module.exports = {
    mongoURI: 'mongodb://127.0.0.1:27017/AgroIA'
};
// app.js o server.js
const express = require('express');
const connectDB = require('./database');

const app = express();

// Conectar a la base de datos
connectDB();

app.get('/', (req, res) => res.send('API funcionando'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
