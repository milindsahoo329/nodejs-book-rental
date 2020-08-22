const Joi = require('joi');
const db = require("../models");
const book = require('../models/book');
const Book = db.book;
const calculateService = require("../services/calculateService");

module.exports = {

    calculate: async (req, res) => {

        const schema = Joi.object().keys({
            customerId: Joi.string().required(),
            issueDate: Joi.date().required(),
            returnDate: Joi.date().required()            
        });

        const validation = await schema.validate(req.body);

        if (validation.error) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: validation.error
            });
        } else {

            const { customerId, issueDate, returnDate } = req.body;

            book.find({
                $and : [
                    {
                        issueDate: {
                            $gte:req.body.issueDate
                        }
                    }, 
                    {
                        returnDate: {
                            $lte:req.body.returnDate
                        }
                    },
                    {
                        customerId:req.body.customerId
                    }
                ]
            })
            .then(async (bookList)=>{
                let result = await calculateService.calculate(bookList);
                return res.status(201).send(result);
            });            

        }


    }

}