const express=require('express');
const { appendFile } = require('fs');
const router=express.Router();
const masterRoute=require('../routes/masterroute')

console.log('router')
router.use('/master',express.json());
router.use('/master',masterRoute);

module.exports=router