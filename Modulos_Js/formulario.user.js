document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector('body')

  const h1Formulario = document.createElement('h1')
  h1Formulario.className = 'h1Formulario'
  h1Formulario.textContent = 'Ingresa tu email y contraseña para crear tu post'
  mainContainer.append(h1Formulario)

  const divContainer = document.createElement('div')
  divContainer.id = 'divContainer'
  mainContainer.append(divContainer)

  const formulario = document.createElement('form')
  formulario.id = 'login-form'
  divContainer.append(formulario)

  // F para crear inputs
  const inputFactory = (typeN, nameN, idName, placeHolder) => {
    const inputN = document.createElement('input')
    inputN.type = typeN
    inputN.name = nameN
    inputN.id = idName
    inputN.placeholder = placeHolder
    return inputN
  }

  formulario.append(
    inputFactory('email', 'email', 'email', 'Ingresa tu email'),
    inputFactory('password', 'password', 'password', 'Ingresa tu contraseña')
  )

  const buttonSubmit = document.createElement('input')
  buttonSubmit.type = 'submit'
  buttonSubmit.value = 'Enviar'
  buttonSubmit.id = 'submit-button'
  formulario.appendChild(buttonSubmit)

  const $form = document.getElementById('login-form')

  $form.addEventListener('submit', (event) => {
    event.preventDefault()
    const $email = document.getElementById('email')
    const $password = document.getElementById('password')

    const email = $email.value
    const password = $password.value

    const loginService = 'https://devto-repo-api.onrender.com/auth/login'

    fetch(loginService, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText)
        }
        return response.json()
      })
      .then((json) => {
        console.log('Response json:', json)
        if (json?.data?.token) {
          localStorage.setItem('token', json.data.token)
          alert('Login exitoso')
          window.location.href = 'formulario.html'
        } else {
          alert('Usuario o contraseña incorrectos')
        }
      })
      .catch((error) => console.error('Login Error:', error))
  })
})
