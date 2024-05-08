const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({

pid:{
    type: String,
    required: true,

},

}
,
{ timestamps: true }
)
module.exports = mongoose.model('Process',processSchema)
