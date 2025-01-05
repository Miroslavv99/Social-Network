const postsContainer = document.querySelector('.posts-container_content')
const shareButton = document.querySelector('#share')
const postInput = document.querySelector('#post-input')


class Post {
    _posts = []
    constructor(information) {
        this.information = information
    }

    addPost(information) {
        const post = new Post(information)
        this._posts.push(post)
    }

    removePost(index) {
        this._posts.splice(index, 1)
    }

    displayPost() {
        postsContainer.innerHTML = ''
        this._posts.forEach((post, index) => {
            const postCard = document.createElement('div')
            postsContainer.appendChild(postCard)
            postCard.classList.add('post-card')

            
            
            const postCardHeader = document.createElement('div')
            postCardHeader.classList.add('post-card-header')
            postCard.appendChild(postCardHeader)

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('post-delete')
            postCardHeader.appendChild(deleteButton)
            deleteButton.addEventListener('click', () => {
                this.removePost(index)
                this.displayPost()
            })

            const profileImage = document.getElementById('profile-image').cloneNode(true)
            postCardHeader.appendChild(profileImage)

            const profileName = document.createElement('h3')
            profileName.textContent = 'Miroslav Bochko'
            postCardHeader.appendChild(profileName)

            const onlineStatus = document.createElement('p')
            onlineStatus.textContent = 'online'
            postCardHeader.appendChild(onlineStatus)

            const postText = document.createElement('div')
            postText.classList.add('post-text')
            postText.innerHTML = `${post.information}`
            postCard.appendChild(postText)

            
        })
    }
}


const postCreater = new Post()

shareButton.addEventListener('click', () => {
    const inputValue = postInput.value 

    if(!inputValue) return

    postCreater.addPost(inputValue)

    postCreater.displayPost()

    postInput.value = ''

    

})