
let ans=""

function myFunction1(){
    ans = ans.concat('1');
    document.getElementById("math").innerHTML = ans;
}

function myFunction2(){
    ans = ans.concat('2');
    document.getElementById("math").innerHTML = ans;
}

function myFunction3(){
    ans = ans.concat('3');
    document.getElementById("math").innerHTML = ans;
}

function myFunction4(){
    ans = ans.concat('4');
    document.getElementById("math").innerHTML = ans;
}

function myFunction5(){
    ans = ans.concat('5');
    document.getElementById("math").innerHTML = ans;
}

function myFunction6(){
    ans = ans.concat('6');
    document.getElementById("math").innerHTML = ans;
}

function myFunction7(){
    ans = ans.concat('7');
    document.getElementById("math").innerHTML = ans;
}

function myFunction8(){
    ans = ans.concat('8');
    document.getElementById("math").innerHTML = ans;
}

function myFunction9(){
    ans = ans.concat('9');
    document.getElementById("math").innerHTML = ans;
}

function myFunction0(){
    ans = ans.concat('0');
    document.getElementById("math").innerHTML = ans;
}

function myFunctionC(){
    ans=""
    document.getElementById("math").innerHTML = ans;
    document.getElementById("display").innerHTML = "";
}

function myFunctionback(){
    ans=ans.slice(0, -1);;
    document.getElementById("math").innerHTML = ans;
}

function myFunctionmod(){
    ans = ans.concat('%');
    document.getElementById("math").innerHTML = ans;
}

function myFunctionsbacks(){
    ans = ans.concat('/');
    document.getElementById("math").innerHTML = ans;
}

function myFunctiondot(){
    ans = ans.concat('.');
    document.getElementById("math").innerHTML = ans;
}

function myFunctionsum(){
    ans = ans.concat('+');
    document.getElementById("math").innerHTML = ans;
}

function myFunctionmin(){
    ans = ans.concat('-');
    document.getElementById("math").innerHTML = ans;
}

function myFunctionmul(){
    ans = ans.concat('*');
    document.getElementById("math").innerHTML = ans;
}

function myFunctionExecute(){
    document.getElementById("math").innerHTML = ans.concat('='); 
    document.getElementById("display").innerHTML = eval(ans);
}