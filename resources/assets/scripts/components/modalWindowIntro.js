function modalWindowIntro() {
    let videoModal = document.querySelector(".intro__modal");
    let videoContainer = document.querySelector(".intro__modal .video__player");
    let iconClose = document.querySelector(".intro__modal-close");
    let btnVideo = document.querySelectorAll(".c-content__btn--video");

    if(!videoModal || !videoContainer) {
        return;
    };

    const closeAll = () => {
        let playerRef = window.videoPlayerRef;
        let player = playerRef && playerRef.current && playerRef.current.plyr;

        videoModal.classList.remove("toggle");
        iconClose.classList.remove("toggle");
        videoContainer.classList.remove("is-openModal");

        if(player) {
            player.pause();
        };
    };

    btnVideo.forEach(btn => {
        btn.addEventListener("click", () => {
            videoModal.classList.add("toggle");
            iconClose.classList.add("toggle");
            videoContainer.classList.add("is-openModal");
        });
    });

    videoModal.addEventListener("click", (e) => {
        if(e.target === videoModal) {
            closeAll();
        };
    });

    iconClose.addEventListener("click", closeAll);
};

export default modalWindowIntro;
