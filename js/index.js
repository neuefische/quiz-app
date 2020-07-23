const bookmarks = document.querySelectorAll('.card__bookmark')

bookmarks.forEach(addToggleLogic)

export function addToggleLogic(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('md-inactive')
  })
}
