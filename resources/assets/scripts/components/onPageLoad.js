function onPageLoad(func) {
    if(document.readyState === "complete") {
        func;
    } else {
        window.addEventListener("load", func, false);
        return () => window.removeEventListener("load", func);
    };
};

export default onPageLoad;
