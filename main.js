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

  const favoriteFood = ["Coke","nuggets","strawberrys","chocolate"];
  let makeList = `<ul>`;
  for (let index = 0; index < favoriteFood.length; index++) {
    const element = favoriteFood[index];
    makeList += `<li>${element}</li>`;
  }
  makeList += `</ul>`;
  console.log(makeList);
  document.getElementById("favoriteFood").outerHTML = makeList;
  

  

  
const aboutMePictures ={
  pictures:[
  {class:"Left-picture" , source:"/assets/computer-programming.jpeg", alt:"computer-programming", description:"My course"},
  {class:"Middle-picture" , source:"/assets/dance.jpg", alt:"dance", description:"My hobbie"},
  {class:"Right-picture" , source:"/assets/nails.jpg", alt:"nails", description:"My side Job"}]
}
for (let i = 0; i < aboutMePictures.pictures.length; i++) {
  const element = aboutMePictures.pictures[i];
  let img = document.createElement(`img`);
  img.src = element.source;
  img.className =element.class;
  img.alt =element.alt;
  img.style.display= `inline-Block`;
  let p = document.createElement(`p`);
  p.textContent = element.description;
  p.style.display= `inline-Block`;
  document.querySelector(`section`).appendChild(img);
  document.querySelector(`section`).appendChild(p);
  }



