const tNav = doc.querySelector(".tnav");

const tinfoOpen = doc.querySelector("#tinfo");
const tinfoClose = doc.querySelector(".tinfo-close");
const tinfoNav = doc.querySelector(".tinfo-nav");

const tbrowseOpen = doc.querySelector("#tbrowse");
const tbrowseClose = doc.querySelector(".tbrowse-close");
const tbrowseNav = doc.querySelector(".tbrowse-nav");

tinfoOpen.addEventListener("click", () => {
    tNav.classList.add("tnav-open");
    tinfoNav.classList.add("tinfo-open");
});

tinfoClose.addEventListener("click", () => {
    tNav.classList.remove("tnav-open");
    tinfoNav.classList.remove("tinfo-open");
});

tbrowseOpen.addEventListener("click", () => {
    tNav.classList.add("tnav-open");
    tbrowseNav.classList.add("tbrowse-open");
});

tbrowseClose.addEventListener("click", () => {
    tNav.classList.remove("tnav-open");
    tbrowseNav.classList.remove("tbrowse-open");
});