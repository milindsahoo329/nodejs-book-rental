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
            let rentalObject = new calc.rentalFunctions(days);
            if(type == "novel"){
                sum = sum + rentalObject.novel();
            } else if ( type == "fiction"){
                sum = sum + rentalObject.fiction();
            } else {
                sum = sum + rentalObject.regular();
            }
            
        });

        let result = {
            totalAmount : sum
        }

        return result;        

    }

}