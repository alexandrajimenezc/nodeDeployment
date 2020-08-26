const UrlModel = require('../models/Url');
const urlControler = {}



urlControler.home = (req, res) => {
    res.render('index');
}

 urlControler.about = (req, res) => {
    res.render('about');
} 



urlControler.addUrl = async (req, res, next) => {

    let respuesta;
    const original = req.body.urlOriginal;
    const url = new UrlModel({ urlOriginal: original })
    try {
        let resultado = await url.save()
        respuesta = {
            codigo: 201,
            message: 'almacenado correctamente',
            url: resultado.urlCorta
        }
    } catch (error) {
        console.error(error)
        respuesta = {
            codigo: 400,
            error: 'hubo un problema , sorry have an error'

        }
    }
    res.json(respuesta);
    next();
}


urlControler.redirectionUrl= async(req,res,next)=> {
  /*  console.log(req.params.url) */
   const url = await UrlModel.findOne({urlCorta: req.params.url});
   if(!url) {
    res.redirect('/?error=404');
    next();
}else{
    res.redirect(url.urlOriginal);
    next();
}

   
 
    
}


module.exports = urlControler;


/*
    urlControler.addUrl= async (req,res, next)=>{

   const respuesta ={
       'respuesta': 'todo bien , todo correcto . Y yo que me alegro'
   }
    res.json(respuesta);
    next();
    } */


/*  urlControler.addUrl= async (req,res, next)=>{
        console.log('enviando form..')
    console.log(req.body.urlOriginal)
    let respuesta;
    const original=req.body.urlOriginal;
    const url= new UrlModel({urlOriginal:original})
    try {
    let resultado =  await url.save()
    respuesta= {
        message:'almacenado correctamente',
        url: resultado.urlCorta
    }
    } catch (error) {
        console.error(error)
    res.json({ message: 'Sorry you have an error' })
    }
    res.json(respuesta);
    next();
    }
 */









/* indexControler.create= async(req, res) => {


    try {
        const newUser = await userModels.create(req.body);
        console.log(newUser)
        res
            .json({ newUser, message: 'user created' });

    } catch (error) {
        console.error(error)
        res.json({ message: 'Sorry you have an error' })
    }

} */


/*
(req,res)=>{
    res.send('¡texthhhhhhhhhhhhhhhhhho');
    } */