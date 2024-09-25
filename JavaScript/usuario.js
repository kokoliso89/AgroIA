// models/Usuario.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    paquete: { type: String, enum: ['básico', 'medio', 'premium'], default: 'básico' },
    fecha_registro: { type: Date, default: Date.now },
    documentos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Documento' }],
    zona_social: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    zona_mercado: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);


//TENGO QUE REPETIR este proceso para las demás colecciones (Documentos, Posts, Comentarios, Productos, Chatbot, DetectorPlagas).