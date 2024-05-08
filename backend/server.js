// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const processRoutes = require('./routes/processRoutes');
const ProcessRoutes = require('./routes/processRoutes')
const app = express();
app.use(cors());

// Middleware
app.use(express.json());

//Connect to mongoDB
mongoose.connect('mongodb+srv://rifat:654654@cluster0.v5wfpvl.mongodb.net/process_management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log({err}));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
app.get("/", (req, res) => {
  res.json({
    message:"Ok"
  })
})
app.use('/api', ProcessRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
