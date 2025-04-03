const express = require('express');
const app = express();
const productRoutes = require('./routes/products');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/products', productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log('Servidor listo en http://localhost:'+PORT));
