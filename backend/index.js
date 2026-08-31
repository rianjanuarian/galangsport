const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { testConnection } = require('./config/database'); // <-- import testConnection

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Galangsport Backend API');
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  // Cek koneksi ke database saat server mulai berjalan
  await testConnection();
});
