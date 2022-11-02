const textBloc = document.querySelectorAll('.text-bloc');
const nbTextBloc = textBloc.length;
const dates = document.querySelectorAll('.date');
const images = document.querySelectorAll('.bloc-images img');
const nbImages = images.length;
const precedent = document.querySelector('.fa-arrow-left-long');
const suivant = document.querySelector('.fa-arrow-right-long');
const cercles = document.querySelectorAll('.cercle')
let count = 0;

function slideSuivante(){
    images[count].classList.remove('active');
    textBloc[count].classList.remove('active')
    dates[count].classList.remove('active')
    precedent.classList.add('active')
    images[count].classList.remove('animDroite')
    textBloc[count].classList.remove('animDroite')
    dates[count].classList.remove('animDroite')
    
    if (count < (nbImages - 1)){
        count++;
        images[count].classList.add('animDroite')
        textBloc[count].classList.add('animDroite')
        dates[count].classList.add('animDroite')
        
        if(count == (images.length - 1)){
            suivant.classList.remove('active')     
        }
    }
    dates[count].classList.add('active')
    textBloc[count].classList.add('active')
    images[count].classList.add('active')

    for(i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') - 1 === count){
            cercles[i].classList.add('active-cercle')
        } else {
            cercles[i].classList.remove('active-cercle')
        }
    }
}

suivant.addEventListener('click',slideSuivante)

function slidePrecedente(){
    images[count].classList.remove('active');
    images[count].classList.remove('animGauche')
    textBloc[count].classList.remove('active')
    textBloc[count].classList.remove('animGauche')
    dates[count].classList.remove('active')
    dates[count].classList.remove('animGauche')
    suivant.classList.add('active')
    if (count > 0){
        count--;
        images[count].classList.add('animGauche')
        textBloc[count].classList.add('animGauche')
        dates[count].classList.add('animGauche')
        if(count == (images.length = 0)){
            precedent.classList.remove('active')     
        }
    }
    dates[count].classList.add('active')
    textBloc[count].classList.add('active')
    images[count].classList.add('active');

    for(i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') - 1 === count){
            cercles[i].classList.add('active-cercle')
        } else {
            cercles[i].classList.remove('active-cercle')
        }
    }
}

precedent.addEventListener('click', slidePrecedente);

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente()
    } else if(e.keyCode === 39){
        slideSuivante()
    }
}

document.addEventListener('keydown', keyPress)

cercles.forEach(cercle => {
    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++){
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');
        console.log(count);
        console.log(this.getAttribute('data-clic'));
        if(count < this.getAttribute('data-clic')){         
                slideSuivante();
            } else {
                slidePrecedente()
                console.log(slidePrecedente);
            }
    })
})