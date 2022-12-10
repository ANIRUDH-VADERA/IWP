var numberChart = {
    1: "AIJQY",
    2: "BKR",
    3: "CGLS",
    4: "DMT",
    5: "EHNX",
    6: "UVW",
    7: "OZ",
    8: "FP"
}

var chaldeanDestiny = {
    1: "You radiate with a dynamic and efficient energy.",
    2: "You appear friendly and unpretentious.",
    3: "You are uplifting, inspiring, and charming.",
    4: "You love the intimacy, consistency, and the security a family provides.",
    5: "You are a stimulating person.",
    6: "You radiate understanding and compassion.",
    7: "You seem mysterious and different.",
    8: "You appear strong and powerful.",
    9: "You have an impressive and aristocratic bearing.",
    11: "You have worked hard to gain confidence and overcome, at least to some extent, an in-born shyness.",
    22: "You radiate reliability and consistency.",
    33: "You inspire confidence.",
}

$(document).ready(()=>{
    $(".btn").click((event)=>{
        event.preventDefault();
        var sum = 0;
        Array.from($(".input")[0].value.toUpperCase().split("")).map((item)=>{
            for(var i=1;i<9;i++){
                if(numberChart[i].includes(item)){
                    break
                }
            }
            sum += i;
        });

        while(Array.from(sum.toString().split("")).length != 1 && (sum != 11 && sum != 22 && sum != 33) ){
            var newSum = 0;
            Array.from(sum.toString().split("")).map((item)=>{
                newSum += parseInt(item);
            })
            sum = newSum
        }
        $(".result").hide();
        if ( $( ".result" ).first().is( ":hidden" ) ) {
            $(".result").html("<h4>"+chaldeanDestiny[sum]+"</h4>").slideDown(5000);
        } else {
            $(".result").hide();
        }
    
    });
});

