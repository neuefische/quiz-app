import { getAll } from './utils'

export function initBookmarkLogic() {
  const bookmarks = getAll('[data-js=bookmark]')
  bookmarks.forEach(addToggleLogic)
}

export function addToggleLogic(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmarked')
  })
}
