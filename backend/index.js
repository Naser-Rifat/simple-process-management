const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const processRoutes = require('./routes/processRoutes');
require('./config/dotenv');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', processRoutes);

//404 Handler
app.use((req, res, next) => {
  next("Request URL not found!");
});
app.use((error, req, res, next) => {
  console.log(error);
  if (error) {
    res.status(500).send({error});
  } else {
    res.status(500).send("There was an Error!");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
