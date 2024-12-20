const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const patientRoutes = require('./routes/patient');
app.use('/api/patients', patientRoutes);

app.listen(3000, async () => {
  console.log('Server running on http://localhost:3000');
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
