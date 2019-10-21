const picDetail = document.querySelector('#pic-detail')
const posts = document.querySelector('#posts')

const createImage = src => {
  const image = document.createElement('img')
  let n = Number(pic)+1
  image.className = 'pic' + n
  image.src = src
  return image
}

const onPostClick = event => {
  let image = createImage(event.currentTarget.src)
  image.classList = event.currentTarget.classList
  document.body.classList.add('no-scroll')
  picDetail.style.top = window.pageYOffset + 'px'
  picDetail.appendChild(image)
  picDetail.classList.remove('hidden')

  const keyNav = e =>{
    let forward = Number(image.classList.value.split('pic')[1]) + 1
    let backward = Number(image.classList.value.split('pic')[1]) - 1
    if(e.key === 'ArrowRight'){
      if(forward <= 9){
        picDetail.innerHTML = ''
        image = createImage('assets/images/post'+forward+'.jpg')
        image.classList = 'pic'+forward
        picDetail.appendChild(image)
      } else {
        picDetail.innerHTML = ''
        image = createImage('assets/images/post'+1+'.jpg')
        image.classList = 'pic'+1
        picDetail.appendChild(image)
      }
    }
    if(e.key === 'ArrowLeft'){
      if(backward >= 1){
        picDetail.innerHTML = ''
        image = createImage('assets/images/post'+backward+'.jpg')
        image.classList = 'pic'+backward
        picDetail.appendChild(image)
      } else {
        picDetail.innerHTML = ''
        image = createImage('assets/images/post'+9+'.jpg')
        image.classList = 'pic'+9
        picDetail.appendChild(image)
      }
    }
  }
  document.onkeydown = keyNav
}

const onDetailsClick = () => {
  document.body.classList.remove('no-scroll')
  picDetail.classList.add('hidden')
  picDetail.innerHTML = ''
}

// Put pics into DOM
for (pic in picList) {
  const picSRC = picList[pic]
  const image = createImage(picSRC)
  image.addEventListener('click', onPostClick)
  posts.appendChild(image)
}

picDetail.addEventListener('click', onDetailsClick)