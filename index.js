const express= require('express');
const app= express();
const path= require('path')

const PORT= process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

require('./config/mongoose');
require('dotenv').config({path: '.env'}); 
const indexRouter =require('./router/index');

//leer datos del form , habilitar body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//motor de vista 
app.set('view engine' , 'pug');
//carpeta vistas
app.set('views', path.join(__dirname, './views'));
//ARCHIVOS ESTATICOS
app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(PORT, host,()=>console.log(`Server funciona!`));





/* const bodyParser= require('body-parser') */
/* const mongoose= require('mongoose') */
/* //mongo
mongoose.Promise=global.Promise;
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}) */