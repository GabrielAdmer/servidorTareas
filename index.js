const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require('cors');
//crear el servidor
const app = express();

//conectar ala base de datos
conectarDB();

// habilitar cors
app.use(cors());

//habilitar express.json
app.use(express.json({ extends: true }));

//puerto de la app
const port = process.env.PORT || 4000;

// defimoir la pagina principal

//Importar rutas
app.use('/api/usuarios/', require('./routes/usuarios'));
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));
//arrancar la app
app.listen(port, '0,0,0,0', () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});

// app.get('/', (req, res) => {
//   res.send('hola mundo');
// });
