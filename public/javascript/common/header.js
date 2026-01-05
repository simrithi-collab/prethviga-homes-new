const menuBtn = document.querySelectorAll(".header_tab_action .pagesList .pageLink a");

// Set active class based on current page
const currentPath = window.location.pathname;
menuBtn.forEach(tab => {
    tab.classList.remove("active");
    if (tab.getAttribute("href") === currentPath) {
        tab.classList.add("active");
    }
});

menuBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        // Remove active class from all tabs
        menuBtn.forEach(tab => tab.classList.remove("active"));
        item.classList.add("active");
    });
});
