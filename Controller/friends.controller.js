const { friends } = require('../Models/friends.models');

function addFriend(req,res){
    if(!req.body.name){
        res.status(400).json(
            {
                error:"Missing Friend"
            }
        )
    }
    else{
        const friendAdd={
            name:req.body.name,
            age:req.body.age,
            id:friends.length
        }
        friends.push(friendAdd)
        res.json(friendAdd)
    }

}
function getFriends(req,res)
    {
        res.send(friends)
    }
function getFriend(req,res){
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
    }
module.exports={addFriend,getFriends,getFriend}