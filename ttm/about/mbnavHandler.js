const mbopen = doc.querySelector("#nav-open");
const mbclose = doc.querySelector("#nav-close");
const nav= doc.querySelector("#mnavc");


mbopen.addEventListener("click", () => {
    nav.classList.add("mbopen");
});

mbclose.addEventListener("click", () => {
    nav.classList.remove("mbopen");
});