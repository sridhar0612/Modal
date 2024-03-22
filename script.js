'use strict';
const modal= document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const btnCloseModal= document.querySelector('.close-modal');
const btnsOpenModal= document.querySelectorAll('.show-modal');// querySelectorAll will create an nodelist which acts like an array we can iterate

const openModal= function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');  
}
const closeModal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

for(let i=0; i<btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
//The below code will listen to all the events in the document 
document.addEventListener('keydown',function(e){
console.log(e.key);
if(e.key==='Escape' && !modal.classList.contains('hidden')){
closeModal();
}
})
