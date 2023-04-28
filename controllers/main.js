const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const signIn = async  (req, res, next) => {
    const {username,password} = req.body;
    if (!password || !username){
        throw new BadRequest('Please provide email and password')
    }

    const id = Date.now()
    console.log(id)
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    
    
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) => {
    console.log(req.user)

    const luckyNumber = Math.floor(Math.random() *100);
    res.status(200).json({msg:`Hello, ${req.user.username}`,secret:`Here is your authorized data, your luck number is ${luckyNumber}`})

    }

module.exports = {
    signIn,
    dashboard
}