function PageLoaded(){
  SetTeleporterButtons();
  hljs.highlightAll();
}
function LinkClicked(){
  ScrollToTop()
  message = `
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Loading The Page</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
  </div>
`;
  document.body.innerHTML += message;
}

function ScrollToTop() {
  window.scrollTo((x = 0), (y = 0));
}

const options = {
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
};
const swup = new Swup(options);
swup.on("clickLink", ScrollToTop);
swup.on("pageView",LinkClicked);
