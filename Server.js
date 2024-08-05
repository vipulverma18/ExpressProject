const express = require('express')
const friendRouter = require('./Routes/friends.routes')
const messageRouter = require('./Routes/messages.route')
const path=require('path')


const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    res.on('finish', () => {
        const timeTaken = Date.now() - startTime
        console.log(`Method =${req.method} and url=${req.baseUrl}${req.url}
         Time for Execution=${timeTaken}ms`)
    })
})
app.use(express.json())


app.use('/friends', friendRouter)
app.use('/messages', messageRouter)
app.use('/site',express.static(path.join(__dirname,'public')))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})