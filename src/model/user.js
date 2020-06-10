//Não importa oq eu coloque aqui dá os mesmos problemas...
//Já não tenho mais ideias...
const mongoose = require('../bancoDados');


const userSchema = new mongoose.Schema({
userName:{
    type:String,
    require:true,
},
senha:{
type:String,
require:true,
select: false
},
email:{
    type:String,
    unique: true,
    require: true,
    lowercase:true
},
nascDia:{
type:String,
requise:true
},
genero:{
type:String,
uppercase:true
},

temporizadorData:{
    type: Date,
    default:Date.now,
},
//Fim da criação da tabela do BD
});

const User = mongoose.model('User',userSchema);

module.exports = User;
