const loadCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories){
    //Get the container
    //loop operations on array of object
    //create element
    const categoryContainer = document.getElementById("category-container");
    for(let cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`
        categoryContainer.append(categoryDiv);
    }
}
// {category_id: '1001', video_id: 'aaaa', thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg', title: 'Shape of You', authors: Array(1), …}
// Load Videos
const loadVideos = () =>{
    fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data)=>displayVideos(data.videos));
}
const displayVideos = (videos) =>{
    videos.forEach((video)=>{
        console.log(video)
        const videoContainer = document.getElementById("video-container");
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
<div class="card bg-base-100 shadow-sm w-full h-full">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Video" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        videoContainer.append(videoCard);
    })
}


loadVideos();
loadCategory();