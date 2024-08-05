const path=require('path')

function getMessage(req,res){
    
    //res.send('<ul><li>Welcome Vipul</li></ul>')
    res.sendFile(path.join(__dirname,'..','public','images','vipul.jpg'))
    
}
function postMessage(req,res){
    res.send('<ul><li>Updating Message</li></ul>')
    
}

module.exports={
    getMessage,postMessage
}