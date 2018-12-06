
function displayModal() {
    modal.classList.toggle('bg-modal--open');
}


class CreatArticle {
    constructor(domElement){
      this.domElement = domElement;
      this.heading = this.domElement.querySelector('#title').value;
      this.date = this.domElement.querySelector('#date').value;
      this.message = this.domElement.querySelector('#message').value;
    }
    
  }
const modal = document.querySelector('.bg-modal');
const addBtn = document.querySelector('.addBtn')
addBtn.addEventListener('click', displayModal)
const form = document.querySelectorAll('.form')
form.forEach((e) => {return new CreatArticle(e)});