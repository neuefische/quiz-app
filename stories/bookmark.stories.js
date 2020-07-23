export default { title: 'Components/bookmark' }
import { addToggleLogic } from '../js/index.js'

export const bookmarkToggle = () => {
  const section = document.createElement('section')
  section.className = 'card'
  section.innerHTML = `<i class="card__bookmark material-icons md-36 md-dark " >bookmark</i> Question bla bla`
  const bookmark = section.querySelector('.card__bookmark')
  addToggleLogic(bookmark)
  return section
}
