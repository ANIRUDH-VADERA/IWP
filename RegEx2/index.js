    var cardNo = prompt("Enter the Credit Card Number");

    function is_creditCard(cardNo)
    {
        regEx = /^(?:34|37[0-9]{13})$/;
        if(cardNo.match(regEx))
        {
            return "Valid Amercican Express credit card number!";
        }

        regEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/; 
        if(cardNo.match(regEx)){
            return "Valid Visa credit card number!";
        }

        regEx = /^(?:5[1-5][0-9]{14})$/;
        if(cardNo.match(regEx))
        {
            return "Valid Mastercard number!";
        }

        regEx = /^(?:6(?:011|5[0-9]{2})[0-9]{12})$/;
        if(cardNo.match(regEx))
        {
            return "Valid Discover card number!";
        }

        regEx =  /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
        if(cardNo.match(regEx)){
            return "Valid Dinners Club card number!"; 
        }

        regEx =  /^(?:(?:2131|1800|35[0-9]{3})[0-9]{11})$/;
        if(cardNo.match(regEx)){
            return "Valid JCB card number!";
        }
        
        return "Not a valid card number of common format!";
    }

    alert(is_creditCard(cardNo));