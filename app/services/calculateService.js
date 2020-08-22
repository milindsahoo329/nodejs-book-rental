const db = require("../models");
const moment = require("moment");
const calc = require("../config/calculateConfig");

module.exports = {

    calculate: async (booksList) => {

        let sum = 0;

        booksList.forEach(element => {
            let a = moment(element.issueDate);
            let b = moment(element.returnDate);
            let days = b.diff(a,'days');
            let type = element.bookType != null ? element.bookType : "regular";
            sum = sum + days*calc[type];
        });

        let result = {
            totalAmount : sum
        }

        return result;        

    }

}