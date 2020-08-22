const Joi = require('joi');
const db = require("../models");
const customer = require('../models/customer');
const Customer = db.customer;

module.exports = {

    create: async (req, res) => {

        const schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required()
        });

        const validation = await schema.validate(req.body);

        if (validation.error) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: validation.error
            });
        } else {

            const { name, email } = req.body;

            let _id =  Math.random().toString(36).substring(7);

            Customer.create({
                _id,
                name, 
                email
            })
            .then((customer)=>{
                return res.status(201).send(customer);
            });            

        }


    }

}