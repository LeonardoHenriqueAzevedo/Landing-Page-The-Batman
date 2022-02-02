let trailer = document.querySelector(".trailer");
let video = document.querySelector(".video");

function toggle() {
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
    // if (trailer.classList != active) {
    //     console.log("teste")
    // }
}