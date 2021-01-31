var nav_background, burger_icon, nav_buttons;
var index=0, counter=0;

window.onscroll = function() {scrolling()} //Onscroll event listener
window.addEventListener("resize", screenSize); //Window resize event listener

function scrolling () {
    nav_background = document.getElementsByClassName("nav-background-color");

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {        
        nav_background[index].classList.add("nav-background-opacity"); //Change opacity to 1
        nav_background[index].classList.remove("nav-background-no-opacity");
    } else{
        nav_background[index].classList.add("nav-background-no-opacity"); //Change opacity to 0
        nav_background[index].classList.remove("nav-background-opacity");
    }
}

scrolling()

//Hide or display nav buttons when burger icon is clicked.
function toggleNav () {    
    counter++;     
    if (counter % 2 != 0) {
        nav_buttons[index].style.display = "block"; //Show nav buttons     
    }else {
        nav_buttons[index].style.display = "none"; //Hide nav buttons     
    }
  }

//Check if burger icon is clicked.
function clickedIcon () {       
    toggleNav();
}  

//Check screen size and display nav items accordingly
function screenSize () {    
    burger_icon = document.getElementsByClassName("burger");
    nav_buttons = document.getElementsByClassName("nav-list");
    if(window.screen.width < 480){
        nav_buttons[index].style.display = "none"; //Hide nav buttons
        burger_icon[index].style.display = "block"; //Show burger icon
        nav_buttons[index].classList.add("nav-list-burger"); //Add mobile styling to nav buttons
    } else {
        burger_icon[index].style.display = "none"; //Show burger icon
        nav_buttons[index].style.display = "flex"; //Show nav buttons
        nav_buttons[index].classList.remove("nav-list-burger"); //Remove mobile styling to nav buttons
        counter=0;
    }
}
  
screenSize();