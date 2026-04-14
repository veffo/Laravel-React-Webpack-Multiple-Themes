import initialState from "../../store/initialState";

const timeScroll = initialState.clickScrollToSection;

function scroll(targetElement, duration) {
    let html = document.documentElement;
    let header = document.querySelector(".c-headerMenu");
    let defaultScroll = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";

    let startPos = window.pageYOffset;
    let startTime = null;

    function step(currentTime) {
        if(!startTime) {
            startTime = currentTime;
        };

        let resultTime = currentTime - startTime;
        let progress = Math.min(resultTime / duration, 1);
        let headerOffset = header.offsetHeight;

        let targetPos = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        let distance = targetPos - startPos;

        let easeEffect = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        let movePos = startPos + (distance * easeEffect);

        window.scrollTo(0, movePos);

        if(progress < 1) {
            requestAnimationFrame(step);
        } else {
            html.style.scrollBehavior = defaultScroll; // return default settings page scroll
        };
    };

    requestAnimationFrame(step);
};

function clickScrollToSection() {
    document.addEventListener("click", (e) => {
        let link = e.target.closest("a");

        if(!link || !link.href) {
            return;
        };

        let [linkUrl, linkHash] = link.href.split("#");
        let [thisUrl] = window.location.href.split("#");

        if(linkUrl === thisUrl) {
            if(linkHash) {
                let targetElement = document.getElementById(linkHash);

                if(targetElement) {
                    e.preventDefault();
                    scroll(targetElement, timeScroll > 500 ? timeScroll : 500);
                };
            } else {
                e.preventDefault();
            };
        };
    });
};

export default clickScrollToSection;
