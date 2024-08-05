const express=require('express')
const messageRouter=express.Router();

const {getMessage,postMessage}=require('../Controller/messages.controller')

messageRouter.get('/',getMessage)
messageRouter.post('/',postMessage)



module.exports=messageRouter