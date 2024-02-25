const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});

document.getElementById("department-link").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("dashboard-container").style.display = "block";
})