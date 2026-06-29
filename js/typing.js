const words = [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(type,1200);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,--charIndex);

        if(charIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;
        }

    }

    setTimeout(type,deleting?60:120);

}

type();