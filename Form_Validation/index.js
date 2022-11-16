var button = document.querySelector(".btn");

button.addEventListener("click",(event)=>{
    event.preventDefault();
    var name1 = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var comment = document.querySelector("#comment").value;

    var hear = document.querySelectorAll(".hear");
    var gender = document.querySelectorAll(".gender");
    var Subs = document.querySelectorAll(".Subscription");

    var heading = document.querySelector(".heading");

    var flag = 0;
    if(name1 === "" || email === "" || username === "" || password==="" || comment===""){
        heading.innerHTML = "Please Enter All the Fields";
    }
    else{
        hear = Array.from(hear);
        hear.map((item)=>{
            if(item.selected){
                flag = 1;
            }
        });
        if(flag==0){
            console.log("HI1");
            heading.innerHTML = "Please Enter All the Fields";
        }
        else{        
            flag = 0;
            gender = Array.from(gender);
            gender.map((item)=>{
                if(item.checked){
                    flag = 1;
                }
            });
            if(flag==0){
                console.log("HI2");
                heading.innerHTML = "Please Enter All the Fields";
            }
            else{
                flag = 0;
                Subs = Array.from(Subs);
                Subs.map((item)=>{
                    if(item.checked){
                        flag = 1;
                    }
                });
                if(flag==0){
                    console.log("HI3");
                    heading.innerHTML = "Please Enter All the Fields";
                }
                else{
                    if(confirm("Whether to submit the data")===true){
                        window.location.replace("./result.html");
                    }
                }
            }
        }
    }
});