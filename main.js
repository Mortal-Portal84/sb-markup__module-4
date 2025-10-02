const contentViewButtons = document.querySelectorAll('.page-content__toggle')
const pageContentView = document.querySelector('.page-content__main')

contentViewButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contentViewButtons.forEach(btn => btn.classList.remove('page-content__toggle--current'))
    button.classList.add('page-content__toggle--current')

    pageContentView.classList.toggle(
      'page-content__main--horizontal',
      index === 0
    )
  })
})
