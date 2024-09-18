const express = require('express');

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

// Middleware para gestionar las rutas de productos
app.use('/product', require('./routes/product'));

// Middleware para servir archivos estáticos desde la carpeta 'vistas'
app.use(express.static('vistas'));

// Iniciar el servidor
app.listen(app.get('PORT'), () => console.log(`Server running on port ${app.get('PORT')}`));
