const doc = document;

const minfoToggle = doc.querySelector("#minfo");
const minfoNav = doc.querySelector(".minfo-nav");
var minfoToggleStatus = false;


const mbrowseToggle = doc.querySelector("#mbrowse");
const mbrowseNav = doc.querySelector(".mbrowse-nav");
var mbrowseToggleStatus = false;

const msitesToggle = doc.querySelector("#msites");
const msitesNav = doc.querySelector(".msites-nav");
var msitesToggleStatus = false;

minfoToggle.addEventListener("click", () => {
    if(minfoToggleStatus) {
        minfoNav.classList.remove("minfo-open");
        minfoToggleStatus = false;
    } else {
        minfoNav.classList.add("minfo-open");
        minfoToggleStatus = true;
    }
});

mbrowseToggle.addEventListener("click", () => {
    if(mbrowseToggleStatus) {
        mbrowseNav.classList.remove("mbrowse-open");
        mbrowseToggleStatus = false;
    } else {
        mbrowseNav.classList.add("mbrowse-open");
        mbrowseToggleStatus = true;
    }
});

msitesToggle.addEventListener("click", () => {
    if(msitesToggleStatus) {
        msitesNav.classList.remove("msites-open");
        msitesToggleStatus = false;
    } else {
        msitesNav.classList.add("msites-open");
        msitesToggleStatus = true;
    }
});