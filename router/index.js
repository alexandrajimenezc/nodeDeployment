const express=require('express');
const router= express.Router();
const {home , about, addUrl,redirectionUrl}=require('../controllers/urlController.js');



router.get('/' , home);
router.get('/about' , about);
router.post('/', addUrl)
router.get('/:url',redirectionUrl)


module.exports = router;