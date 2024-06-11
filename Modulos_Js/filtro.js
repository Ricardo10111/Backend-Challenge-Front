import { createPosts } from './crear_posts.js'

export const filtro = (data, container) => {
  const containerMain = document.querySelector('.headerPosts')
  const containerCalendar = document.createElement('div')
  containerCalendar.className = 'containerCalendar'
  containerMain.append(containerCalendar)
  const calendar = document.createElement('input')
  calendar.type = 'date'
  calendar.id = 'calendar'
  const btnRefresh = document.createElement('a')
  btnRefresh.type = 'submit'
  btnRefresh.className = 'btnRefresh'
  const imgRefresh = document.createElement('img')
  imgRefresh.className = 'imgRefresh'
  imgRefresh.src =
    '../images/refresh-page-arrow-button_icon-icons.com_53909.ico'
  btnRefresh.append(imgRefresh)
  containerCalendar.append(calendar)
  containerCalendar.append(btnRefresh)

  btnRefresh.addEventListener('click', () => {
    location.reload()
  })
  calendar.addEventListener('change', () => {
    const searchTerm = calendar.value
    const filteredPost = data.filter((post) => post.fecha === searchTerm)
    container.innerHTML = ''

    if (filteredPost.length === 0) {
      const pNoresult = document.createElement('p')
      pNoresult.className = 'noReults'
      pNoresult.textContent = 'No hay Posts que mostrar'
      pNoresult.style.display = 'block'
      container.append(pNoresult)
    } else {
      createPosts(filteredPost, container)
    }
  })
}
