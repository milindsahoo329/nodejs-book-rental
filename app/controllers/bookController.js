const Joi = require('joi');
const db = require("../models");
const book = require('../models/book');
const Book = db.book;

module.exports = {

    create: async (req, res) => {

        const schema = Joi.object().keys({
            name: Joi.string().required(),
            issueDate: Joi.date().required(),
            returnDate: Joi.date(),
            customerId: Joi.string().required(),
            bookType: Joi.string(),
        });

        const validation = await schema.validate(req.body);

        if (validation.error) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: validation.error
            });
        } else {

            const { name, issueDate, returnDate, customerId, bookType } = req.body;

            Book.create({
                name, 
                issueDate,
                returnDate,
                customerId,
                bookType
            })
            .then((book)=>{
                return res.status(201).send(book);
            });            

        }


    }

}