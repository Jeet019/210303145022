const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

const productsRoutes = require('./routes/products');
app.use('/categories', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
