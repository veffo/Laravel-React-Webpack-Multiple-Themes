import initialState from "../../store/initialState";

const timeScroll = initialState.timeScrollToTopBtn;

function scroll(duration) {
    let html = document.documentElement;
    let defaultScroll = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";

    let startPos = window.pageYOffset;
    let startTime = performance.now();

    function step(currentTime) {
        let resultTime = currentTime - startTime;
        let progress = Math.min(resultTime / duration, 1);
        let movePos = startPos - (startPos * progress);

        window.scrollTo(0, movePos);

        if(progress < 1) {
            requestAnimationFrame(step);
        } else {
            html.style.scrollBehavior = defaultScroll; // return default settings page scroll
        };
    };

    requestAnimationFrame(step);
};

function scrollToTopButton() {
    let pxShow = 700;
    let goTopButton = document.querySelector(".c-arrowToTop");

    if(!goTopButton) {
        return;
    };

    if(window.scrollY >= pxShow) {
        goTopButton.classList.add("is-visible");
    };

    goTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        scroll(timeScroll > 500 ? timeScroll : 500);
    });

    window.addEventListener("scroll", function() {
        if(window.scrollY >= pxShow) {
            if(!goTopButton.classList.contains("is-visible")) {
                goTopButton.classList.add("is-visible");
            };
        } else {
            goTopButton.classList.remove("is-visible");
        };
    });
};

export default scrollToTopButton;
