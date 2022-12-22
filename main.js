function handleClick(){
    console.log("Element Clicked");
    document.getElementById("Places-I-Love").style.color = "red";  
    document.getElementById("Contact-Me").style.color = "red";
}


function delayHandleClick(){
    setTimeout(handleClick , 3000);
}

let checkIfClicked = false;
let element = document.body;
  function switchmode() {
  
    if(!checkIfClicked){
            //change to dark mode
            element.classList.add("dark-mode");
            //check if clicked = true
            checkIfClicked = true;
    }else{
        //change to light mode
        element.classList.remove("dark-mode");
        //check if clicked = false
        checkIfClicked = false;


    }
  }