let ans=""

function addNum(a){
    ans = ans.concat(a);
    document.getElementById("math").innerHTML = ans;
}

function addOpt(b){
    ans = ans.concat(b);
    document.getElementById("math").innerHTML = ans;
}

function cle(){
    ans=""
    document.getElementById("math").innerHTML = ans;
    document.getElementById("display").innerHTML = "";
}

function backspace(){
    ans=ans.slice(0, -1);;
    document.getElementById("math").innerHTML = ans;
}

function Execute(){
    document.getElementById("math").innerHTML = ans.concat('='); 
    document.getElementById("display").innerHTML = eval(ans);
}