function getMessage(req,res){
    res.send('<ul><li>Welcome Vipul</li></ul>')
    
}
function postMessage(req,res){
    res.send('<ul><li>Updating Message</li></ul>')
    
}

module.exports={
    getMessage,postMessage
}