function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container')
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = ` 
            <h4>Users-${post.userId}</h4>
            <h5>Posts: ${post.title} </h5>
            <p> Posts Description:${post.body} </p>
        `
        postContainer.appendChild(postDiv);

    }

}