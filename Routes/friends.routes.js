const express=require('express')
const {addFriend,getFriends,getFriend}=require('../Controller/friends.controller')

const friendRouter=express.Router();

friendRouter.use((req,res,next)=>{
   console.log(`IP Address of Machine is${req.ip}`)
    next();
})
friendRouter.post('/',addFriend)
friendRouter.get('/',getFriends)
friendRouter.get('/:friendId',getFriend)

module.exports=friendRouter;