import '../styles.css'

export default { title: 'Components/tags' }

export const simpleTag = () => '<span class="card__tag">Tag1</span>'

export const tagWithBackground = () =>
  '<section class="card" style="background: yellow;"><span class="card__tag">tag123</span></section>'
