import express from 'express'
import { getAllUsers, signIn, signUp } from './user.controller.js'
import userAuth from '../../middleWares/auth.js'
import { validation } from '../../middleWares/validation.js'
import { addUserSchema } from './user.validation.js'

export const userRouter = express.Router()

userRouter.get('/', userAuth, getAllUsers)
userRouter.post('/signup', validation(addUserSchema), signUp)
userRouter.post('/signin', signIn)