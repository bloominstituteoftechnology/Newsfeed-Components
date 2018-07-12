let formModal = document.querySelector('.form-modal');
let openModal = document.querySelector('.new-article-btn');
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');
let form = formModal.querySelector('.form-content form');

const getTheDate = date => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  let ordinal;

  const j = day % 10;
  const k = day % 100;

  if(j==1 && k != 11){
    ordinal = 'st';
  }else if(j == 2 && k != 12){
    ordinal = 'nd';
  }else if(j == 3 && k != 13){
    ordinal = 'rd';
  }else{
    ordinal = 'th';
  }


  return `${months[monthIndex]} ${day}${ordinal}, ${year}`;
}

const createArticle = articleData => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('article');

  const newHeading = document.createElement('h2');
  newHeading.innerText = articleData.heading;

  newDiv.appendChild(newHeading);

  const newCloseBtn = document.createElement('div');
  newCloseBtn.innerText = 'X';
  newCloseBtn.classList.add('close-btn');

  newDiv.appendChild(newCloseBtn);

  const newDate = document.createElement('div');
  newDate.innerText = getTheDate(new Date());
  newDate.classList.add('date');

  newDiv.appendChild(newDate);

  const newPara = document.createElement('p');
  newPara.innerText = articleData.para;

  newDiv.appendChild(newPara);

  const newSpan = document.createElement('span');
  newSpan.classList.add('expandButton');

  newDiv.appendChild(newSpan);
  document.querySelector('.articles').appendChild(newDiv);
  new Article(newDiv);
}

const toggleModal = () => {
  if(!formModal.classList.contains('modal-show')){
    formModal.classList.toggle('modal-show');
    TweenLite.to(formModal, .5, {scale: 1});
  }else{
    TweenLite.to(formModal, 1, {scale: 0});
    resetForm();
    setTimeout(() => formModal.classList.toggle('modal-show'), 1000);
  }
}

const resetForm = () => {
  formModal.querySelector('.title').value = '';
  formModal.querySelector('.text').value = '';
}

openModal.addEventListener('click', event =>{
  event.stopPropagation();
  toggleModal();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  let heading = formModal.querySelector('.title').value;
  let para = formModal.querySelector('.text').value;
  createArticle({ heading, para})
  toggleModal();
  resetForm();
});

form.querySelector('.reset-btn').addEventListener('click', event => {
  event.preventDefault();
  resetForm();
});

form.querySelector('.cancel-btn').addEventListener('click', event => {
  event.preventDefault();
  toggleModal();
})
