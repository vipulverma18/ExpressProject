const express=require('express')

const app=express();
const PORT=3000;

const friends=[
    {
        id:0,
        name:'Vipul',
        age:30
    },
    {
        id:1,
        name:'Chirag',
        age:26
    },{
        id:2,
        name:'Varun',
        age:34
    }
]

app.use((req,res,next)=>{
    const startTime=Date.now();
next();
res.on('finish',()=>{
    const timeTaken=Date.now-startTime
    console.log(`Method =${req.method} and url=${req.url}
         Time for Execution=${timeTaken}ms`)
})
})
app.use(express.json())

app.post('/friends',(req,res)=>{
    if(!req.body.name){
        res.status(400).json(
            {
                error:"Missing Friend"
            }
        )
    }
const friendAdd={
    name:req.body.name,
    id:friends.length
}
friends.push(friendAdd)
res.json(friends[friends.length-1])
})
app.get('/friends',(req,res)=>
{
    res.send(friends)
})
app.get('/friends/:friendId',(req,res)=>{
    const id=Number(req.params.friendId)
    const friend=friends[id]
    if(friend)
        {
    res.json(friend)
}
else{
    res.status(404).json(
        {
            error:'friend does not exist'
        }
    )
}
})
// app.post('/messages',(req,res)=>{
//     console.log('<ul><li>Updating Message</li></ul>')
// })
app.listen(PORT,()=>
{
    console.log(`Listening on port ${PORT}`)
})