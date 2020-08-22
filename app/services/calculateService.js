const db = require("../models");
const moment = require('moment');

module.exports = {

    calculate: async (booksList) => {

        let sum = 0;

        booksList.forEach(element => {
            let a = moment(element.issueDate);
            let b = moment(element.returnDate);
            let days = b.diff(a,'days');
            sum = sum + days*1;
        });

        let result = {
            totalAmount : sum
        }

        return result;        

    }

}