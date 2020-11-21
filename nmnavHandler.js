const doc = document;

const minfoToggle = doc.querySelector("#nav-minfo");
const minfoNav = doc.querySelector(".iclick");
var minfoToggleStatus = false;


const mbrowseToggle = doc.querySelector("#nav-mbrowse");
const mbrowseNav = doc.querySelector(".bclick");
var mbrowseToggleStatus = false;

const msitesToggle = doc.querySelector("#nav-msites");
const msitesNav = doc.querySelector(".sclick");
var msitesToggleStatus = false;

minfoToggle.addEventListener("click", () => {
    if(minfoToggleStatus) {
        minfoNav.classList.remove("iopen");
        minfoToggleStatus = false;
    } else {
        minfoNav.classList.add("iopen");
        minfoToggleStatus = true;
    }
});

mbrowseToggle.addEventListener("click", () => {
    if(mbrowseToggleStatus) {
        mbrowseNav.classList.remove("bopen");
        mbrowseToggleStatus = false;
    } else {
        mbrowseNav.classList.add("bopen");
        mbrowseToggleStatus = true;
    }
});

msitesToggle.addEventListener("click", () => {
    if(msitesToggleStatus) {
        msitesNav.classList.remove("sopen");
        msitesToggleStatus = false;
    } else {
        msitesNav.classList.add("sopen");
        msitesToggleStatus = true;
    }
});