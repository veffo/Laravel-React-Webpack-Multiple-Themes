import initialState from "../../store/initialState";

function afterLoadingAnim(time) {
    return new Promise(
        resolve => setTimeout(
            () => resolve(),
            time ? time : initialState.defaultLoadingAnim,
        ),
    );
};

export default afterLoadingAnim;
