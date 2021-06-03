if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("Service worker registered", reg))
    .catch((err) => console.log("Service worker not registered", err));
}

let pwaInstallPrompt = null;
const installPWA = document.getElementById("installPWA");

window.addEventListener("beforeinstallprompt", (e) => {
  pwaInstallPrompt = e;
});

installPWA.addEventListener("click", (e) => {
  if (pwaInstallPrompt){
    pwaInstallPrompt.prompt();
  }
});

if (window.matchMedia('(display-mode: standalone)').matches) {  
  installPWA.remove();
}  
