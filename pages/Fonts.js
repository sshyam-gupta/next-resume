const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Catamaran&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const catamaran = new FontFaceObserver('Catamaran')

  catamaran.load().then(() => {
    document.documentElement.classList.add('Catamaran')
  })
}

export default Fonts