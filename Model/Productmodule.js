const { Schema, model } = require('mongoose');
const productSchema = new Schema({
    name: {
        type: "String",
        required: true
    },

})
const productmodule=model("Product",productSchema);
module.exports=productmodule;