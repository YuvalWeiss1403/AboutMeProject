function handleClick(){
    console.log("Element Clicked");
    document.getElementById("Places-I-Love").style.color = "red";  
    document.getElementById("Contact-Me").style.color = "red";
}


function delayHandleClick(){
    setTimeout(handleClick , 3000);
}