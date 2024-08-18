let hour=document.getElementById('hour')
let minute=document.getElementById('minute')
let second=document.getElementById('second')
setInterval(()=>{let d=new Date();
let hourRotate=d.getHours();
let minuteRotate=d.getMinutes();
let secondRotate=d.getSeconds();
hourRotate=hourRotate*30+minuteRotate/2;
minuteRotate=minuteRotate*6;
secondRotate=secondRotate*6;
hour.style.transform=`rotate(${hourRotate}deg)`
minute.style.transform=`rotate(${minuteRotate}deg)`
second.style.transform=`rotate(${secondRotate}deg)`
},1000)
