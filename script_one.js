import { Post, postsContainer} from './script_two.js';


const shareButton = document.querySelector('#share');
const postInput = document.querySelector('#post-input');


const postCreater = new Post(postsContainer);


shareButton.addEventListener('click', () => {
    const inputValue = postInput.value;

    if (!inputValue) return;

    postCreater.addPost(inputValue);
    postCreater.displayPost();

    postInput.value = '';
});
