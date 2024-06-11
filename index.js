import { filtro } from './Modulos_Js/filtro.js'
import { createPosts } from './Modulos_Js/crear_posts.js'
document.addEventListener('DOMContentLoaded', () => {
  const containerMain = document.querySelector('.mainContainer')
  const container = document.createElement('div')
  container.className = 'containerPosts'
  containerMain.append(container)

  createPosts(container)

  filtro(container)
})
