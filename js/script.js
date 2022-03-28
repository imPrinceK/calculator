let ans="";
let check="";

function addNum(a){
    ans = ans.concat(a);
    document.getElementById("math").innerHTML = ans;
    check=a;
}

function addOpt(b){
    if(check=="*" || check=="+" || check=="-" || check=="/" || check=="%"){
        ans = (ans.slice(0,-1)).concat(b);
    }
    else{
        ans = ans.concat(b);
        check=b;
    }
    document.getElementById("math").innerHTML = ans;
}

function del(){
    ans=" ";
    document.getElementById("math").innerHTML = ans ;
    document.getElementById("display").innerHTML = "";
}

function backspace(){
    ans=ans.slice(0, -1);
    document.getElementById("math").innerHTML = ans;
}

function Execute(){
    if(check=="*" || check=="+" || check=="-" || check=="/" || check=="%"){
        console.log("exceute");
        window.alert("Please Enter Number First after Operator");
    }
    else{
        document.getElementById("math").innerHTML = ans.concat('='); 
        document.getElementById("display").innerHTML = eval(ans);
    }
    
}