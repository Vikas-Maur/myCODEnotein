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
const eSaidOpt = {
    threshold: 0.6
};
let eObserver = new IntersectionObserver((entries, observer)=>{
    AnimateESaid(entries,"var(--primary)","animateESaid");
},eSaidOpt);
eObserver.observe(eSaid);


const eqoute = document.querySelector(".equote");
let eqouteObserver = new IntersectionObserver((entries,observer)=>{
    AnimateESaid(entries,"var(--dark)","animateEQuote");
},eSaidOpt);
eqouteObserver.observe(eqoute);

// const mcnh1 = document.querySelector(".mcnh1");
// let mcnH1observer = new IntersectionObserver((entries,observer)=>{
//     AnimateESaid(entries,"var(--dark)","animatemcnH1");
// },eSaidOpt);
// mcnH1observer.observe(mcnh1);

