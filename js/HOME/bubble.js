const tagLine = document.querySelector(".tagline");
const navAnimationPlay = sessionStorage.getItem("firstViewOnmyCODEnotein");

if(navAnimationPlay=="false"){
   tagLine.style.setProperty("animation","setClipPath 2s ease-in-out"); 
}
else{
    tagLine.style.setProperty("animation","setBGforNav 5s ease-in-out,setClipPath 2s ease-in-out 5s"); 
    
}
