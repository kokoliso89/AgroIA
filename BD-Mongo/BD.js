// Seleccionar la base de datos
use('AgroIA');

// Crear la colección de Usuarios
db.createCollection('Usuarios');

// Crear la colección de Documentos
db.createCollection('Documentos');

// Crear la colección de Posts (Zona Social)
db.createCollection('Posts');

// Crear la colección de Comentarios
db.createCollection('Comentarios');

// Crear la colección de Productos (Zona de Mercado)
db.createCollection('Productos');

// Crear la colección de Chatbot
db.createCollection('Chatbot');

// Crear la colección de Detector de Plagas
db.createCollection('DetectorPlagas');

db.Usuarios.insertOne({
    nombre: "Juan Pérez",
    email: "juan@example.com",
    contraseña: "password123",
    paquete: "básico",
    fecha_registro: new Date(),
    documentos: [],
    zona_social: [],
    zona_mercado: []
});

db.Documentos.insertOne({
    titulo: "Documento de Ejemplo",
    contenido: "Contenido del documento",
    fecha_subida: new Date(),
    usuario_id: ObjectId() 
});


db.Posts.insertOne({
    contenido: "Este es un post de ejemplo",
    fecha_publicacion: new Date(),
    usuario_id: ObjectId(), 
    comentarios: []
});


db.Comentarios.insertOne({
    contenido: "Este es un comentario de ejemplo",
    fecha_publicacion: new Date(),
    usuario_id: ObjectId(), 
    post_id: ObjectId() 
});


db.Productos.insertOne({
    nombre: "Producto de Ejemplo",
    descripcion: "Descripción del producto",
    precio: 100,
    fecha_publicacion: new Date(),
    usuario_id: ObjectId() 
});


db.Chatbot.insertOne({
    usuario_id: ObjectId(), 
    mensaje: "Hola, ¿cómo estás?",
    respuesta: "Estoy bien, gracias.",
    fecha: new Date()
});


db.DetectorPlagas.insertOne({
    usuario_id: ObjectId(), 
    imagen: "url_de_la_imagen",
    resultado: "Resultado del análisis",
    fecha: new Date()
});
