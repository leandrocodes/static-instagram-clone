const picDetail = document.querySelector('#pic-detail')
const posts = document.querySelector('#posts')

const createImage = src => {
  const image = document.createElement('img')
  image.src = src
  return image
}

const onPostClick = event => {
  const image = createImage(event.currentTarget.src)
  document.body.classList.add('no-scroll')
  picDetail.style.top = window.pageYOffset + 'px'
  picDetail.appendChild(image)
  picDetail.classList.remove('hidden')
}

const onDetailsClick = () => {
  document.body.classList.remove('no-scroll')
  picDetail.classList.add('hidden')
  picDetail.innerHTML = ''
}

// Put pics into DOM
for(pic in picList){
  const picSRC = picList[pic]
  const image = createImage(picSRC)
  image.addEventListener('click', onPostClick)
  posts.appendChild(image)
}

picDetail.addEventListener('click', onDetailsClick)