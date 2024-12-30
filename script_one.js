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

    displayPost() {
        postsContainer.innerHTML = ''
        this._posts.forEach(post => {
            const postCard = document.createElement('div')
            postCard.innerHTML = `POST: ${post.information}`
            postCard.classList.add('post-card')
            postsContainer.appendChild(postCard)
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