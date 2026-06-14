function joinMessage(){
alert("Thank you for supporting NayePankh Foundation!");
}

function submitForm(){
alert("Volunteer Registration Successful!");
return false;
}

function counter(id,target){

let count=0;

let interval=setInterval(function(){

count++;

document.getElementById(id).innerHTML=count;

if(count>=target){
clearInterval(interval);
}

},20);
}

counter("children",500);
counter("volunteers",120);
counter("events",75);