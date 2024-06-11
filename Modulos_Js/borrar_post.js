export const deletePost = (index) => {
  fetch('https://devto-repo-api.onrender.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const posts = data.data.posts
      const postToDelete = posts[index]

      if (postToDelete && postToDelete.id) {
        fetch(`https://devto-repo-api.onrender.com/posts/${postToDelete.id}`, {
          method: 'DELETE'
        })
          .then((response) => {
            if (response.ok) {
              alert('Post eliminado exitosamente')
              location.reload()
            } else {
              console.error('Error al eliminar el post')
            }
          })
          .catch((error) => {
            console.error('Error al eliminar el post:', error)
          })
      } else {
        console.error('No se encontró el post para eliminar')
      }
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error)
    })
}
