const {Schema,model}=require('mongoose');
const Userschema=new Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,
    },
    password:{
        type:String,
        required:true,
        maxlength:10
    },
})
const Usermodule=model("Users",Userschema);
module.exports=Usermodule;