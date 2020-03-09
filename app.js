let clock=document.getElementById("clock");
setInterval(function(){
let date=new Date();
clock.innerHTML=`<h3 style='color:red'>${date.toLocaleTimeString()}</h3>`


   },1000)
