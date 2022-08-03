const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
    msg:{
        type:String
    
    },
    name:{
        type:String
        
    },
    room:{
        type:String
    }
   
});
const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;