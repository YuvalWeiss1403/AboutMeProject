function handleClick(id){
    console.log("Element Clicked");
    document.getElementById(id).style.color = "red";

}


function delayHandleClick(id){
    setTimeout(() => {
        
    },handleClick(id),3000);
}