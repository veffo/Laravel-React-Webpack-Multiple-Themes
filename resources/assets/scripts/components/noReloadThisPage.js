function noReloadThisPage() {
    document.addEventListener("click", (e) => {
        let link = e.target.closest("a");

        if(!link || !link.href) {
            return;
        };

        let url = new URL(link.href);
        let currentUrl = new URL(window.location.href);
        let thisPage = url.origin === currentUrl.origin && url.pathname === currentUrl.pathname;

        if(thisPage && url.hash.length > 0) {
            return;
        };

        if(thisPage) {
            e.preventDefault();
        };
    });
};

export default noReloadThisPage;
