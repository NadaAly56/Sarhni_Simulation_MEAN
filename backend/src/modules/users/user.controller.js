import { userModel } from "../../../database/models/user.model.js"
import bcrypt from "bcrypt";
import generateToken from "../../utilis/generateToken.js";

const signUp = async(req, res) => {
    const {name, email, password, age} = req.body
    const user = await userModel.findOne({email})
    if (user) 
        return res.json({msg: 'Email is already in use'})

    bcrypt.hash(password, Number(process.env.ROUND)).then(async function(hash) {
    await userModel.insertMany({name, email, password:hash, age})
    res.json({msg:'success'})
    });
}

const signIn = async(req, res) => {
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    const match = user? await bcrypt.compare(password, user.password):true

    if (!user || !match) 
        return res.json({msg:'email or password is incorrect'})
    user.password = undefined
    const token = generateToken({user})
    res.json({msg:'success', token})
}

const getAllUsers = async (req, res)=> {
    const users = await userModel.find()
    res.json({users})
}

export {
    signIn,
    signUp,
    getAllUsers
}