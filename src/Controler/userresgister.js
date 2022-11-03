const { Console } = require('console');
const express=require('express');

const ResgisterUser=(req,res)=>
{
console.log("HelloWorld");
res.send('Successful');

}

module.exports={ResgisterUser}