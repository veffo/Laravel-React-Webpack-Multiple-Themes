import initialState from "../../store/initialState";

function afterLoadingRequest(time) {
    return new Promise(
        resolve => setTimeout(
            () => resolve(),
            time ? time : initialState.defaultLoadingTime,
        ),
    );
};

export default afterLoadingRequest;
