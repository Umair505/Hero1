const showLoader = () =>{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("video-container").classList.add("hidden");
}
const hideLoader = () =>{
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("video-container").classList.remove("hidden");
}

function removeActiveClass(){
    const activeButtons = document.getElementsByClassName("active");
    for(let btn of activeButtons)
    {
        btn.classList.remove('active');
    }
    console.log(activeButtons)
}

const loadCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) => displayCategories(data.categories));
}

const loadCategoryVideos= (id) =>{
    showLoader();
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const clickedButton = document.getElementById(`btn-${id}`);
        removeActiveClass();
        clickedButton.classList.add('active');
        displayVideos(data.category)
    });
}
const loadVideoDetails = (videoId) =>{

    console.log(videoId);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        displayVideoDetails(data.video);
    })
}
const displayVideoDetails =(video) =>{
    console.log(video);
    document.getElementById("video_details").showModal();
    const detailsContainer = document.getElementById("details_container");
    detailsContainer.innerHTML =`
     <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
    `
}

function displayCategories(categories){
    //Get the container
    //loop operations on array of object
    //create element
    const categoryContainer = document.getElementById("category-container");
    for(let cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `<button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`
        categoryContainer.append(categoryDiv);
    }
}
// {category_id: '1001', video_id: 'aaaa', thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg', title: 'Shape of You', authors: Array(1), …}
// Load Videos
const loadVideos = (searchText = "") =>{
    showLoader();
    fetch( `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res) => res.json())
    .then((data)=>{
        removeActiveClass();
        document.getElementById("btn-all").classList.add("active");
        displayVideos(data.videos)
    });
}
const displayVideos = (videos) =>{
    hideLoader();
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = ""; // Clear the container before adding new videos
    if(videos.length == 0)
    {
        videoContainer.innerHTML = `
        <div class="col-span-full flex flex-col justify-center items-center py-20 text-center">
            <img class="w-[120px] mb-5" src="./resources/Icon.png" alt="">
            <h1 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h1>
        </div>
        `
        return;
    }
    videos.forEach((video)=>{
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
<div class="card bg-base-100  w-full h-full">
            <figure class="relative">
              <img class="w-full h-[200px] object-cover"
                src="${video.thumbnail}"
                alt="Video" />
                <span class="absolute bottom-2 right-2 px-2 rounded text-white bg-black  text-sm">${video.others.posted_date}</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="text-gray-500 text-sm  flex gap-2">
                ${video.authors[0].profile_name}
                ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">`:``}
                
                </p>
                <p class="text-gray-500 text-sm">${video.others.views} views</p>
            </div>
            </div>
            <button class="btn btn-block" onclick="loadVideoDetails('${video.video_id}')">Show Details</button>
        </div>
        `
        videoContainer.append(videoCard);
    })
    
}

document.getElementById('search_input').addEventListener("keyup",(e)=>{
    const input = e.target.value;
    loadVideos(input);
})


loadCategory();