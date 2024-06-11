document.addEventListener('DOMContentLoaded', () => {
  // Crear formulario y agregarlo al body
  const mainContainer = document.querySelector('body')

  const h1Formulario = document.createElement('h1')
  h1Formulario.className = 'h1Formulario'
  h1Formulario.textContent = 'Crea tu cuenta para crear un post!!!'
  mainContainer.append(h1Formulario)

  const divContainer = document.createElement('div')
  divContainer.id = 'divContainer'
  mainContainer.append(divContainer)

  const formulario = document.createElement('form')
  formulario.id = 'crud'
  divContainer.append(formulario)

  // Función para crear inputs
  const inputFactory = (typeN, nameN, idName, placeHolder) => {
    const inputN = document.createElement('input')
    inputN.type = typeN
    inputN.name = nameN
    inputN.id = idName
    inputN.placeholder = placeHolder
    return inputN
  }

  formulario.append(
    inputFactory('text', 'name', 'name', 'Pon tu nombre'),
    inputFactory(
      'text',
      'profilePicture',
      'profilePicture',
      'Imagen Perfil (URL)'
    ),
    inputFactory('email', 'email', 'email', 'Ingresa tu email'),
    inputFactory('password', 'password', 'password', 'Ingresa tu contraseña')
  )

  const buttonSubmit = document.createElement('input')
  buttonSubmit.type = 'submit'
  buttonSubmit.value = 'Enviar'
  buttonSubmit.id = 'buttonSubmit'
  formulario.appendChild(buttonSubmit)

  const $form = document.getElementById('crud')

  $form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData($form)
    const data = Object.fromEntries(formData.entries())

    // Validar los datos antes de enviar
    if (
      !data.email ||
      !data.password ||
      !data.name ||
      !data.profilePicture
    ) {
      alert('Por favor, completa todos los campos.')
      return
    }

    fetch('https://devto-repo-api.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert('Usuario añadido exitosamente')
          window.location.href = 'formulario.user.html'
        } else {
          return response.json().then((errorData) => {
            alert('Error al añadir el usuario: ' + errorData.message)
          })
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Error al comunicarse con la API')
      })
  })
})
