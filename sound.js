window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d395" ,
        "#d36060" ,
        "#c060d3" ,
        "#606bd3" ,
        "#d3d160" ,
        "#60c2d3"
    ];


    //Lets get going with the sounds here

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            /////reset the current time
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //create a function that make bubbles
    const createBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };
});