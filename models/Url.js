const {Schema, model} = require('mongoose');
const shortid= require('shortid')

const urlSchema = new Schema({
    urlOriginal:{
        type:String,
        lowercase:true,
        trim:true,
        required: 'Agrega una URL'   
    },
    urlCorta:{
        type:String
    }
});

urlSchema.pre('save' , async function(next){
    //generar url corta
    this.urlCorta= shortid.generate();
    next();
})
module.exports= model('Urldata' ,urlSchema )