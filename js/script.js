let ans=""
var x=0
var y=0
let v=""

function myFunction1(){
    ans = ans.concat('1');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +1;
}

function myFunction2(){
    ans = ans.concat('2');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +2;
}

function myFunction3(){
    ans = ans.concat('3');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +3;
}

function myFunction4(){
    ans = ans.concat('4');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +4;
}

function myFunction5(){
    ans = ans.concat('5');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +5;
}

function myFunction6(){
    ans = ans.concat('6');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +6;
}

function myFunction7(){
    ans = ans.concat('7');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +7;
}

function myFunction8(){
    ans = ans.concat('8');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +8;
}

function myFunction9(){
    ans = ans.concat('9');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +9;
}

function myFunction0(){
    ans = ans.concat('0');
    document.getElementById("math").innerHTML = ans;
    x=x*10 +0;
}

function myFunctionC(){
    document.getElementById("math").innerHTML = ans;
    x=0;
    y=0;
}

function myFunctionback(){
    ans=ans.slice(0, -1);;
    document.getElementById("math").innerHTML = ans;
}

function myFunctionmod(){
    ans = ans.concat('%');
    document.getElementById("math").innerHTML = ans;
    v="%";
    y=x;
    x=0;
}

function myFunctionsbacks(){
    ans = ans.concat('/');
    document.getElementById("math").innerHTML = ans;
    v="/";
    y=x;
    x=0;
}

function myFunctionsum(){
    ans = ans.concat('+');
    document.getElementById("math").innerHTML = ans;
    v="+";
    y=x;
    x=0;
}

function myFunctionmin(){
    ans = ans.concat('-');
    document.getElementById("math").innerHTML = ans;
    v="-";
    y=x;
    x=0;
}

function myFunctionmul(){
    ans = ans.concat('X');
    document.getElementById("math").innerHTML = ans;
    v="*";
    y=x;
    x=0;
}

function myFunctionExecute(){
    ans = ans.concat('=');
    document.getElementById("math").innerHTML = ans;
    if(z==0){
        z=x;
    }

    if(v=="%"){
        z=y%x
    }
    if(v=="+"){
        z=y+x
    }
    if(v=="-"){
        z=y-x
    }
    if(v=="/"){
        z=y/x
    }
    if(v=="*"){
        z=y*x
    }
    
    document.getElementById("display").innerHTML = y;
}