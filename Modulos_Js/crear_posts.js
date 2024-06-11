import { deletePost } from './borrar_post.js'
import { giveMeData } from './data.js'

export const createPosts = (appendera) => {
  giveMeData()
    .then((data) => {
      if (!Array.isArray(data)) {
        console.error('La función giveMeData no devolvió un array válido', data)
        return
      }

      const postList = data

      postList.forEach((posts, index) => {
        // funciones

        const pFactory = (classN, content) => {
          const pNew = document.createElement('p')
          pNew.className = classN
          pNew.textContent = content
          return pNew
        }

        const aFactory = (classN, content = '', date = '') => {
          const aNew = document.createElement('a')
          aNew.className = classN
          aNew.textContent = content
          aNew.append(date)
          return aNew
        }

        const divFactory = (
          classN,
          contentNew = '',
          contentNew2 = '',
          contentNew3 = '',
          contentNew4 = '',
          contentNew5 = ''
        ) => {
          const divNew = document.createElement('div')
          divNew.className = classN
          divNew.append(contentNew)
          divNew.append(contentNew2)
          divNew.append(contentNew3)
          divNew.append(contentNew4)
          divNew.append(contentNew5)

          return divNew
        }

        const imgFactory = (classN, srcN) => {
          const imgNew = document.createElement('img')
          imgNew.className = classN
          imgNew.src = srcN

          return imgNew
        }

        const h2Factory = (classN, content) => {
          const h2New = document.createElement('h2')
          h2New.className = classN
          h2New.textContent = content
          return h2New
        }

        const btnDelete = aFactory(
          'btnDelete',
          '',
          imgFactory('imagButtonDlt', '..//logos_svg/trashcan_114640.svg')
        )

        appendera.prepend(
          divFactory(
            'mainBox',
            imgFactory('imagen', posts.image),
            divFactory(
              'dateContainer',
              imgFactory('imagenProfile', posts.profilePicture),
              divFactory(
                'nameDateContainer',
                pFactory('pName', posts.name.name),
                pFactory('pDate', posts.date)
              )
            ),
            divFactory('containerH2', h2Factory('h2Post', posts.description)),
            divFactory(
              'containerHashtags',
              aFactory('hash1', posts.hashtags[0]),
              aFactory('hash2', posts.hashtags[0]),
              aFactory('hash3', posts.hashtags[0])
            ),
            divFactory(
              'containerDown',
              divFactory(
                'iconsReactionContainer',
                divFactory(
                  'iconsReaction',
                  pFactory('icons', posts.reactions),
                  pFactory('icons', posts.reactions),
                  pFactory('icons', posts.reactions),
                  pFactory('icons', posts.reactions)
                ),
                divFactory(
                  'containerReactions',
                  pFactory(
                    'pNumReactions',
                    `${posts.numberOfReactions} reactions`
                  )
                )
              ),
              divFactory(
                'commentsContainer',
                imgFactory('imgComents', '../logos_svg/comments.svg'),
                pFactory('pNumComments', `${posts.numberOfComments} comments`)
              ),
              divFactory('btnDeleteConteiner', btnDelete)
            )
          )
        )

        btnDelete.addEventListener('click', () => {
          const resultado = window.confirm(
            'Estas seguro que quieres borrar el post?'
          )
          if (resultado) deletePost(index)
          else alert('Ok no lo borre!')
        })
      })
    })
    .catch((error) => {
      console.error('Error al crear los posts:', error)
    })
}
