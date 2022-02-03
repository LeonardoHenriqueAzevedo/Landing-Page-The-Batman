let trailer = document.querySelector(".trailer");
let video = document.querySelector(".video");

// Toggle active
function toggle() {
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}



