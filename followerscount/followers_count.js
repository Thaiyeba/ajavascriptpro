let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkcountvalue();
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
}

function checkcountvalue(){
    if(count===10){
        alert("your instagram post gained 10 followers ! congragulations!");
    }
    else if(count===20){
        alert("your instagram post gained 20 followers! keep it up!");
    }
}