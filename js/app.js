const videos = document.querySelectorAll("video");
videos.forEach(video=>{
    let prevTitle = video.getAttribute("title")||"";
    prevTitle+="If the video does not load then please refresh/reload the page";
    video.setAttribute("title",prevTitle);
    if(!video.getAttribute("preload")){
        video.setAttribute("preload","none");
    }
});