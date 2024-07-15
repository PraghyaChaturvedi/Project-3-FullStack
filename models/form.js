const mongoose=require("mongoose");
const Schema= mongoose.Schema;

let formSchema= new Schema({
    name:String,
    email:String,
    number:Number,
});

const Form= mongoose.model("Form", formSchema);
module.exports=Form;