if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("Service worker registered", reg))
    .catch((err) => console.log("Service worker not registered", err));
}

let pwaInstallPrompt = null;
const installPWAHTML = `
<div id='installationPrompt' class="position-fixed bottom-0 end-0 p-3 mx-3 my-1" style="z-index: 5;right:0px;">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header" style='background-color:black;border:none;'>
      <img src="/logo.png" class="rounded me-2" alt="logo" style="margin:0px;">
      <strong class="me-auto">Install myCODEnotein Now : (PWA)</strong>
      <button type="button" class="bg-light btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body bg-dark">
      <button id="installPWA" class="btn btn-outline-light mr-5">Install Our App (PWA)</button>
    </div>
  </div>
</div>
`;
document.body.innerHTML += installPWAHTML;

window.addEventListener("beforeinstallprompt", (e) => {
  pwaInstallPrompt = e;
  const toast = new bootstrap.Toast(document.querySelector('.toast'),{autohide:false});
  toast.show();

  document.getElementById('installPWA').addEventListener("click", (e) => {
    if (pwaInstallPrompt){
      toast.hide();
      pwaInstallPrompt.prompt();
    }
  });
  
});


window.addEventListener('appinstalled',(e)=>{
  document.getElementById('installationPrompt').remove();
}) 
