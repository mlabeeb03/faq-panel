const questionType = document.querySelectorAll('.questionType');
const secondaryHeading = document.querySelectorAll('.secondaryHeading');
for(let i = 0; i < secondaryHeading.length; i++){
    secondaryHeading[i].textContent = questionType[i].textContent;
}

const arrows = document.querySelectorAll('.arrowPart');
for(let arrow of arrows){
    arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="13" y1="18" x2="19" y2="12" />
    <line x1="13" y1="6" x2="19" y2="12" />
  </svg>`
}

const answers = document.querySelectorAll('.answer');
for(let answer of answers){
  answer.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora fuga mollitia harum itaque dolore architecto? Esse quo vero quia commodi deleniti. Architecto ut incidunt accusamus qui consequuntur sit perferendis.'
}

const questionButtons = document.querySelectorAll('.question');
for(let questionButton of questionButtons){
  questionButton.addEventListener('click', function(){
    this.classList.toggle('questionInactive');
    this.classList.toggle('questionActive');
    this.nextElementSibling.classList.toggle('answerInactive');
    this.nextElementSibling.classList.toggle('answerActive');
    this.getElementsByTagName('span')[1].classList.toggle('arrowPartRotated');
  })
}

const categories = document.querySelectorAll('.category');

const questionTypes = document.querySelectorAll('.questionType');
for(let questionType of questionTypes){
  questionType.addEventListener('click', function(e){
    $('html,body').animate({
      scrollTop: $(categories[[].indexOf.call(questionTypes, e.target)]).offset().top},
      'slow');
  })
}

const topButton = document.querySelector('.backToTopButton');
topButton.addEventListener('click', function(){
  document.body.scrollIntoView({
    behavior: "smooth",
  });
})

