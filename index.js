var noofdrums= document.querySelectorAll(".drum").length;
for(var i =0; i< noofdrums;i++ )
{
    //when button is clicked
    document.querySelectorAll(" button")[i].addEventListener("click",function (){
    var buttonToClick = this.innerHTML;
    makeSound(buttonToClick);
    buttonAnimation(buttonToClick);
    //console.log(this); it will return <button class="s drum">w</button>
    //console.log(this.innerHTML); it will return w,s,j..
    //this.style.color=" white"; it will change the colour of w,s,j..
   
    });

    //when keyboard keys are pressed
    document.addEventListener("keydown", function(event)
    {
        makeSound(event.key);
        buttonAnimation(event.key);
    })

    //function to make sound
    function makeSound(key)
    {
        
    switch (key){
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(this.innerHTML);
    }
    }

    function buttonAnimation(currentkey)
    {
        var activeButton = document.querySelector("." + currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed")}, 50)
    }
}
