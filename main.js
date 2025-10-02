const contentViewButtons = document.querySelectorAll('.page-content__toggle')
const pageContentView = document.querySelector('.page-content__main')

contentViewButtons[0].addEventListener('click', (e) => {
  if(contentViewButtons[1].classList.contains('page-content__toggle--current')) {
    contentViewButtons[1].classList.remove('page-content__toggle--current')
    contentViewButtons[0].classList.add('page-content__toggle--current')
  }

  pageContentView.classList.add('page-content__main--horizontal')
})

contentViewButtons[1].addEventListener('click', (e) => {
  if(contentViewButtons[0].classList.contains('page-content__toggle--current')) {
    contentViewButtons[0].classList.remove('page-content__toggle--current')
    contentViewButtons[1].classList.add('page-content__toggle--current')
  }

  pageContentView.classList.remove('page-content__main--horizontal')
})
