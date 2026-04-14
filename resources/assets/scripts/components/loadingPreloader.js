import initialState from "../../store/initialState";

const loadingPreloader = () => {
    let html = document.documentElement;
    let preloader = document.querySelector(".c-preloader");

    if(!preloader) {
        return;
    };

    html.classList.add("is-loading");

    window.addEventListener("load", function() {
        setTimeout(() => {
            html.classList.remove("is-loading");
            html.classList.add("is-loaded");

            preloader.addEventListener("transitionend", function afterTransition(e) {
                if(e.target.matches(".c-preloader")) {
                    html.classList.add("is-show");
                    e.target.style.display = "none";
                    preloader.removeEventListener(e.type, afterTransition);
                };
            });
        }, initialState.timeLoadingPreloader);
    });

    window.addEventListener("beforeunload", function() {
        html.classList.remove("is-show");
    });
};

export default loadingPreloader;
