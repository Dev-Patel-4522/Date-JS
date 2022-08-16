var date = new Date();

document.getElementById("date").innerHTML = date;

document.getElementById("date").innerHTML = date.getDate();
document.getElementById("month").innerHTML = date.getMonth();
document.getElementById("year").innerHTML = date.getFullYear();


document.getElementById("hour").innerHTML = date.getHours();
document.getElementById("min").innerHTML = date.getMinutes();
document.getElementById("second").innerHTML = date.getSeconds();

setInterval(current,1000);
function current(){
    var current = new Date();
    document.getElementById("current").innerHTML = current.toLocaleTimeString();
}