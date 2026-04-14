function mobileHeaderMenu() {
    let toggleButton = document.querySelector(".c-mobile__toggle");
    let mainNavWrap = document.querySelector(".c-headerMenu");
    let siteBody = document.querySelector("body");

    if(!(toggleButton && mainNavWrap)) {
        return;
    };

    toggleButton.addEventListener("click", function(e) {
        e.preventDefault();
        toggleButton.classList.toggle("is-clicked");
        siteBody.classList.toggle("menu-is-open");
    });

    mainNavWrap.querySelectorAll(".c-nav a").forEach(function(link) {
        link.addEventListener("click", function() {
            if(window.matchMedia("(max-width: 767px)").matches) {
                toggleButton.classList.toggle("is-clicked");
                siteBody.classList.toggle("menu-is-open");
            };
        });
    });

    window.addEventListener("resize", function() {
        if(window.matchMedia("(min-width: 768px)").matches) {
            if(siteBody.classList.contains("menu-is-open")) {
                siteBody.classList.remove("menu-is-open");
            };

            if(toggleButton.classList.contains("is-clicked")) {
                toggleButton.classList.remove("is-clicked");
            };
        };
    });
};

export default mobileHeaderMenu;
