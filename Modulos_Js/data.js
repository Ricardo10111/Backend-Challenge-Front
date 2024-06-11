export const giveMeData = () => {
  return fetch('https://devto-repo-api.onrender.com/posts')
    .then((response) => response.json())
    .then((data) => data.data)
    .then((newData) => newData.posts)
    .then((newData) => {
      console.log('Datos recibidos:', newData) // Verificar los datos recibidos
      return newData
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error)
      return []
    })
}
