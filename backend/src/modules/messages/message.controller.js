import { messageModel } from "../../../database/models/message.model.js"

const sendMsg = async(req, res) => {
    const {id} = req.params
    const {message} = req.body
    const msg = await messageModel.insertMany({message, receivedId:id})
    res.json({msg: 'success', msg})
}

const getUserMsgs = async(req, res) => {
    const id = req.id
    const msgs = await messageModel.find({receivedId:id}).populate('receivedId')
    res.json({msg:'success',msgs})
}

const deleteMsg = async(req, res) => {
    const {_id} = req.body
    const msg = await messageModel.findByIdAndDelete(_id)
    res.json({msg:'success',msg})
}
export {
    sendMsg,
    getUserMsgs,
    deleteMsg
}
