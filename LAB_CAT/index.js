var submit = document.querySelector(".btn1");

var flames = {
    "F": "Friendship",
    "L": "Love",
    "A": "Affection",
    "M": "Marriage",
    "E": "Enemy",
    "S": "Sister(Sibling)",
}

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    var yname = document.querySelector("#yname").value;
    var pname = document.querySelector("#pname").value;
    var reg = /^[A-Za-z]+$/;
    if(!reg.test(yname)){
        alert("Cant Contain Space and can only contain Alphabets");
    }
    if(!reg.test(pname)){
        alert("Cant Contain Space and can only contain Alphabets");
    }
    var str = "";
    for(var i=0;i< ((pname).length) ;i++){
        if(!yname.includes(pname[i])){
            str += pname[i]
        }
    }
    for(var i=0;i< ((yname).length) ;i++){
        if(!pname.includes(yname[i])){
            str += yname[i]
        }
    }
    var totalCount = str.length;
    var res = "FLAMES"
    var st = 0
    var i = (totalCount - 1)%res.length;
    while(res.length != 1){
        res = res.replace(res[(st + i)%(res.length)],"");
        st += (totalCount-1);
        st = st%(res.length+1);
    }
    var result = document.querySelector(".result");
    result.innerHTML += "<h4>" + flames[res] + "</h4>";
});