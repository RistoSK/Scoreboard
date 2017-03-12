document.getElementById("button1").addEventListener("click", function() {
    var max = parseInt(document.getElementById("matchPoints").value)
    var value = parseInt(document.getElementById("scoreP1").innerHTML)
    var value2 = parseInt(document.getElementById("scoreP2").innerHTML)

    if (value < max && !(value2 == max)) {
        value++;
        document.getElementById("scoreP1").innerHTML = value;
    }
    if (value == max) {
        document.getElementById("p1").style.color = "green";
        document.getElementById("p2").style.color = "red";
        document.getElementById("p1").style.textDecoration = "underline";
        document.getElementById("p2").style.textDecoration = "line-through";
    }
});

document.getElementById("button2").addEventListener("click", function() {
    var max = parseInt(document.getElementById("matchPoints").value)
    var value = parseInt(document.getElementById("scoreP1").innerHTML)
    var value2 = parseInt(document.getElementById("scoreP2").innerHTML)

    if (value2 < max && !(value == max)) {
        value2++;
        document.getElementById("scoreP2").innerHTML = value2;
    }
    if (value2 == max) {
        document.getElementById("p2").style.textDecoration = "underline";
        document.getElementById("p1").style.textDecoration = "line-through";
        document.getElementById("p2").style.color = "green";
        document.getElementById("p1").style.color = "red";

    }
});

document.getElementById("buttonReset").addEventListener("click", function() {
    var value1 = parseInt(document.getElementById("scoreP1").innerHTML)
    var value2 = parseInt(document.getElementById("scoreP2").innerHTML)
    value1 = 0;
    value2 = 0;
    document.getElementById("scoreP1").innerHTML = value1;
    document.getElementById("scoreP2").innerHTML = value2;
    document.getElementById("p1").style.color = "black";
    document.getElementById("p2").style.color = "black";
    document.getElementById("p2").style.textDecoration = "none";
    document.getElementById("p1").style.textDecoration = "none";
});