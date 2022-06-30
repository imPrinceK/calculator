let ans = "";
let check = "";

function addNum(a) {
    ans = ans.concat(a);
    document.getElementById("math").innerHTML = ans;
    document.getElementById("display").innerHTML = eval(ans);
    check = a;
    temp = "";
}

function addOpt(b) {
    if (ans.length == 0 && (b == "*" || b == "/" || b == "%") || ans == "+" || ans == "-") {
        window.alert("Enter Number First");
    }
    else if (check == "*" || check == "+" || check == "-" || check == "/" || check == "%") {
        ans = (ans.slice(0, -1)).concat(b);
    }
    else {
        ans = ans.concat(b);
    }
    check = b;
    document.getElementById("math").innerHTML = ans;
}

function cle() {
    ans = " ";
    document.getElementById("display").innerHTML = ans;
    document.getElementById("math").innerHTML = "";
}

function backspace() {
    ans = ans.slice(0, -1);
    document.getElementById("math").innerHTML = ans;
    temp = ans.charAt(ans.length - 1);
}

function Execute() {
    if (check == "*" || check == "+" || check == "-" || check == "/" || check == "%") {
        window.alert("Enter Number First after Operator");
    }
    else {
        document.getElementById("math").innerHTML = "";
        document.getElementById("display").innerHTML = eval(ans);
        ans = eval(ans).toString();
    }
}