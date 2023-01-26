/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector("title");
let storyopening=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let Storypart1=document.querySelector (".option-one-screen");
let Storypart2 =document.querySelector (".option-two-screen");
let makeend=document.querySelector (".option-one-end");
let buyend=document.querySelector (".option-two-end");
let makeButton=document.querySelector (".option-one");
let buyButoon=document.querySelector (".option-two");
let ClosingButton=document.querySelector(".closing");
let Storyclosing=document.querySelector(".Storyending");

 //When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
 

makeButton.onclick=function(){
Storypart1.style.display="block";
Storypart2.style.display="none";
    storyopening.style.display="none";
    Storyclosing.style.display="none";
   ClosingButton.style.dispaly="block";
};


buyButoon.onclick=function(){
Storypart2.style.display="block";
Storypart1.style.display="none";
        storyopening.style.display="none";
 Storyclosing.style.display="none";
    ClosingButton.style.dispaly="block";
};

ClosingButton.onclick=function(){
Storypart2.style.display="none";
Storypart1.style.display="none";
        storyopening.style.display="none";
    Storyclosing.style.display="block";
   
};



//


