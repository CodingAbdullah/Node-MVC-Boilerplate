const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    first_name : {
        required: true,
        type: String
    },
    last_name : {
        required: true,
        type: String
    }
    /*
    .
    .
    .
    .
    ADD ALL THE ATTRIBUTES IN A SAMPLE MODEL
    */
});

// Export the model
module.exports = mongoose.model('User', User);