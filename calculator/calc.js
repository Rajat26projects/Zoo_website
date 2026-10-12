function add(){
  let a=document.getElementById("fvalue").value;
  let b=document.getElementById("svalue").value;
  let result=Number(a)+Number(b);
    document.getElementById("result").innerHTML=result;
}

function sub(){
let a=document.getElementById("fvalue").value;
let b=document.getElementById("svalue").value;
let result= a - b;
document.getElementById("result").innerHTML=result;
}

function mul(){
  let result=document.getElementById("fvalue").value*document.getElementById("svalue").value;
  document.getElementById("result").innerHTML=result;
}

function div(){
  let result=document.getElementById("fvalue").value /document.getElementById("svalue").value;
  document.getElementById("result").innerHTML=result;
}

function rem(){
  let result=document.getElementById("fvalue").value % document.getElementById("svalue").value;
  document.getElementById("result").innerHTML=result;
}

function pov(){
  let result=document.getElementById("fvalue").value ** document.getElementById("svalue").value;
  document.getElementById("result").innerHTML=result;
}

function holsq(){
  let a=Number(document.getElementById("fvalue").value);
  let b=Number(document.getElementById("svalue").value);
  let result=(a+b)*(a+b);
  document.getElementById("result").innerHTML=result;
}

function cleardata(){
  document.getElementById("result").innerHTML="0";
}