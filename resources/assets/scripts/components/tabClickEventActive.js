function tabClickEventActive(tabLink, tabLinks, tabPanels, linkIndex) {
    tabLinks.forEach(function(link) {
        link.parentNode.removeAttribute("data-tab-active");
        link.removeAttribute("data-tab-active");
    });

    tabLink.parentNode.setAttribute("data-tab-active", "");
    tabLink.setAttribute("data-tab-active", "");

    tabPanels.forEach(function(panel, index) {
        if(index != linkIndex) {
            panel.setAttribute("aria-hidden", "true");
            panel.removeAttribute("data-tab-active");
        } else {
            panel.setAttribute("aria-hidden", "false");
            panel.setAttribute("data-tab-active", "");
        };
    });
};

export default tabClickEventActive;
