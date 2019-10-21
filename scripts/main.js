const createImage = src => {
  const image = document.createElement('img')
  image.src = src
  return image
}

const posts = document.querySelector('#posts')

for(pic in picList){
  const picSRC = picList[pic]
  const image = createImage(picSRC)
  posts.appendChild(image)
}