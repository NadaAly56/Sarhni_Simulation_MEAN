import Joi from 'joi'

export const addUserSchema = Joi.object({
    name: Joi.string().required().min(4).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Za-z0-9]{8,}$/),
    age: Joi.number().required().min(10).max(60)
})
