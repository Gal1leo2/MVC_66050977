const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
