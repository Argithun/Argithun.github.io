const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
}
