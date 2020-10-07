function AnimateESaid(entries,color,animationName){
    entries.forEach(entry=>{
        let displayOnce = true;
        if(entry.isIntersecting && displayOnce){
            entry.target.style.color = color;
            entry.target.style.setProperty("animation",`${animationName} 3s ease-in-out`);
            displayOnce=false
        }
    });
}

const eSaid = document.querySelector(".einstien h1");


