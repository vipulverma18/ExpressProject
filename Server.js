const express=require('express')
const {addFriend,getFriends,getFriend}=require('./Controller/friends.controller')
const {getMessage,postMessage}=require('./Controller/messages.controller')


const app=express();
const PORT=3000;


app.use((req,res,next)=>{
    const startTime=Date.now();
next();
res.on('finish',()=>{
    const timeTaken=Date.now()-startTime
    console.log(`Method =${req.method} and url=${req.url}
         Time for Execution=${timeTaken}ms`)
})
})
app.use(express.json())

app.post('/friends',addFriend)
app.get('/friends',getFriends)
app.get('/friends/:friendId',getFriend)
app.get('/messages',getMessage)
 app.post('/messages',postMessage)
app.listen(PORT,()=>
{
    console.log(`Listening on port ${PORT}`)
})