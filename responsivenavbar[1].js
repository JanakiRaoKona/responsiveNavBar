let menuButtonEl = document.getElementById("menuButton");
let closeIconEl = document.getElementById("closeIcon");
let menuItemsEl = document.getElementById("menuItems");



menuButtonEl.addEventListener('click', function() {
    menuItemsEl.classList.toggle("display-none");
    closeIconEl.classList.toggle("close-icon");
    menuButtonEl.classList.toggle("menu-icon");

});

closeIconEl.addEventListener('click', function() {
    menuItemsEl.classList.toggle("display-none");
    menuButtonEl.classList.toggle("menu-icon");
    closeIconEl.classList.toggle("close-icon");
})