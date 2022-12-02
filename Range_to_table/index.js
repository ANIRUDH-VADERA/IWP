var range = prompt("Enter the Range");

let first="";
let second="";

var flag = 0;

for(var i=0;i<range.length;i++){
    if(range[i] != "-"){
        if(flag==0){
            first += range[i]
        }
        else{
            second += range[i]
        }
    }
    else{
        flag=1
    }
}

var res = document.querySelector(".heading");

const reg = new RegExp('^[0-9]+$');

if(parseInt(second) < parseInt(first)){
    res.innerHTML = "Invalid Range";
}
else if(!(reg.test(first)) || !(reg.test(second))){
    res.innerHTML = "Invalid Range";
}
else if(parseInt(first)<0 || parseInt(second)>10 || parseInt(second)<0 || parseInt(first)>10){
    res.innerHTML = "Invalid Range";
}
else{
    var table = document.querySelector(".table");
    for(var i=parseInt(first);i<parseInt(second)+1;i++){
        table.innerHTML+="<tr><th>"+parseInt(i)+"</th><th>"+parseInt(i)**2+"</th><th>"+parseInt(i)**3+"</th></tr>";
    }
}