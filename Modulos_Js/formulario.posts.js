document.addEventListener('DOMContentLoaded', () => {
  //  Formulario

  const mainContainer = document.querySelector('body')
  // Crear form y agragarlo al body
  const h1Formulario = document.createElement('h1')
  h1Formulario.className = 'h1Formulario'
  h1Formulario.textContent = 'Crea o modifica un Post!!!'
  mainContainer.append(h1Formulario)
  const divContainer = document.createElement('div')
  divContainer.id = 'divContainer'
  mainContainer.append(divContainer)
  const formulario = document.createElement('form')
  formulario.id = 'crud'
  divContainer.append(formulario)

  // F Inputs
  const inputFactory = (typeN, nameN, placeHolder) => {
    const inputN = document.createElement('input')
    inputN.type = typeN
    inputN.name = nameN
    inputN.id = nameN
    inputN.placeholder = placeHolder

    return inputN
  }
  // F selects
  const selectFactory = (nameNew) => {
    const selectReaction = document.createElement('select')
    selectReaction.name = nameNew
    return selectReaction
  }
  // F options
  const optionsFactory = (info = '', textN = '', placeHolderN = '') => {
    const options = document.createElement('option')
    options.value = info
    options.textContent = textN
    options.placeHolder = placeHolderN
    return options
  }

  formulario.append(
    inputFactory('text', 'id', 'Dame el ID si es que  quieres modificar'),
    // inputFactory('text', 'nombre', 'Pon tu nombre'),
    inputFactory('text', 'image', 'Imagen (URL)'),
    inputFactory('text', 'description', 'Descripción')
  )
  formulario
    .appendChild(selectFactory('reactions'))
    .append(
      optionsFactory('', ''),
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🔥', '🔥'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('reactions2'))
    .append(
      optionsFactory('', ''),
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🔥', '🔥'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('reactions3'))
    .append(
      optionsFactory('', ''),
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🔥', '🔥'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('reactions4'))
    .append(
      optionsFactory('', ''),
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🔥', '🔥'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('hashtags'))
    .append(
      optionsFactory(''),
      optionsFactory('#programming', '#programming'),
      optionsFactory('#kodemia', '#kodemia'),
      optionsFactory('#retoJS', '#retoJS'),
      optionsFactory('#generacion32', '#generacion32'),
      optionsFactory('#team', '#team')
    )
  formulario
    .appendChild(selectFactory('hashtags2'))
    .append(
      optionsFactory(''),
      optionsFactory('#programming', '#programming'),
      optionsFactory('#kodemia', '#kodemia'),
      optionsFactory('#retoJS', '#retoJS'),
      optionsFactory('#generacion32', '#generacion32'),
      optionsFactory('#team', '#team')
    )
  formulario
    .appendChild(selectFactory('hashtags3'))
    .append(
      optionsFactory(''),
      optionsFactory('#programming', '#programming'),
      optionsFactory('#kodemia', '#kodemia'),
      optionsFactory('#retoJS', '#retoJS'),
      optionsFactory('#generacion32', '#generacion32'),
      optionsFactory('#team', '#team')
    )
  formulario.append(
    inputFactory('text', 'numberOfReactions', 'Número de Reacciones'),
    inputFactory('text', 'numberOfComments', 'Número de Comentarios'),
    inputFactory('date', 'date')
  )

  const buttomSubmit = document.createElement('input')
  buttomSubmit.type = 'submit'
  buttomSubmit.value = 'Enviar'
  buttomSubmit.id = 'buttomSubmit'
  formulario.appendChild(buttomSubmit)

  // Funcion para agregar la info a la API

  const form = document.querySelector('#crud')
  const token = localStorage.getItem('token')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    fetch('https://devto-repo-api.onrender.com/posts', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert('Post añadido exitosamente')
          location.reload()
        } else {
          alert('Error al añadir el post')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Error al comunicarse con la API')
      })
  })
})
