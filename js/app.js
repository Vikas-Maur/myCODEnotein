if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
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
let toastElement = document.querySelector('.toast');
let toastBody = toastElement.querySelector('.toast-body');
let toast = null;

window.addEventListener('beforeinstallprompt',e=>{
  pwaInstallPrompt = e;
  toast = new bootstrap.Toast(toastElement,{autohide:false});
  toast.show()
});

document.getElementById('installPWA').addEventListener('click',async (e)=>{
  if(pwaInstallPrompt===null){
    return;
  }
  pwaInstallPrompt.prompt();
  toast.hide();
  const userChoice = await pwaInstallPrompt.userChoice;
  if(userChoice.outcome==='dismissed'){
    return;
  }
});

window.addEventListener('appinstalled',(e)=>{  
  document.getElementById('installationPrompt').innerHTML = `<div class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body fw-bold">
      Successfully Installed The App.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div></div>`;
  toastElement = document.querySelector('.toast');
  toast = new bootstrap.Toast(toastElement);
  toast.show()

}) 
