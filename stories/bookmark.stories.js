export default { title: 'Components/bookmark' }
import { addToggleLogic } from '../js/bookmark.js'

export const bookmarkToggle = () => {
  const section = document.createElement('section')
  section.className = 'card'
  section.innerHTML = `<div class="card__bookmark"></div> Question bla bla`
  const bookmark = section.querySelector('.card__bookmark')
  addToggleLogic(bookmark)
  return section
}
