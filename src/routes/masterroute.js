const express=require('express')
const router=express.Router();


const{ResgisterUser}=require('../Controler/userresgister');
console.log('master')
router.get('/ResgisterUser',ResgisterUser);

module.exports=router