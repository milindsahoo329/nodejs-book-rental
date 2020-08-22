let config = {};

let rentals = {
    "regular":1.5,
    "fiction":3,
    "novel":1.5
};

class rentalFunctions {

    constructor(days){
        this.days = days;
    }

    regular () {

        if(this.days > 2){
            return (2 + ( this.days - 2)*1.5);
        } else {
            return 2;
        }       
        
    }

    fiction () {
        return this.days*rentals['fiction'];
    }

    novel () {
        if(this.days < 3){
            return 4.5;
        } else {
            return this.days*rentals['novel'];
        }
    }

}


config.rentalFunctions = rentalFunctions;
config.rentals = rentals;

module.exports = config;