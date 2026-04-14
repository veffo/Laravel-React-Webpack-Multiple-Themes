function stickyHeaderMenu() {
    window.addEventListener("scroll", function() {
        let menu = document.querySelector(".c-headerMenu");
        let posTopBlock = parseInt(getComputedStyle(menu).top.replace("px", ""));
        let scrollPos = window.scrollY;

        if(!menu) {
            return;
        };

        if(scrollPos > posTopBlock) {
            menu.classList.add("is-sticky");
        } else {
            menu.classList.remove("is-sticky");
        };
    });
};

export default stickyHeaderMenu;
