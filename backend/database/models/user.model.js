import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
        minLength:[4, 'name is too short'],
        maxLength:[20, 'name is too long'],
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email is already in use']
    },
    password: {
        type: String,
        // required:true,
        minLength:[8, 'password is too short'],
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 60,      
    },
    emailConfirmed: {
        type: Boolean,
        default: false,
    }
})

export const userModel = mongoose.model('user', userSchema);