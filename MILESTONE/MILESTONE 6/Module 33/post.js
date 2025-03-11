const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => {
    displayPost(data);
   })
}
const displayPost = (posts) => {
    const postContainer = document.getElementById('postContainer');

    posts.forEach((post) =>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    })
}
// handlePost()