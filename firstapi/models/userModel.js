const {Schema , model} = require("../connection");

const schema = new Schema({
    name:String,
    email:String, 
    password: String
})
 
module.exports=model("users",schema);
//schema is used to define structure.
//users is a collection we can name any thing.
//model is used to transfer data in keeping the data in model