const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
        pid: Number,
        createTime: { type: Date, default: Date.now }
      }
)
module.exports = mongoose.model('Process',processSchema)
