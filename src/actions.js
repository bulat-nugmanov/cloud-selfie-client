import {getRecommendations} from "./api";

export const fetchRecommendations = (request: Request) => {

  return (dispatch, getState) => {

    const state = getState();
    if(!state.fetching) {

      dispatch(fetchPending());

      getRecommendations(request).then(recommendations => {
        dispatch(fetchSuccess(recommendations));
      }).catch(error => {
        dispatch(fetchError(error));
      })

    }

    return Promise.resolve();

  }


};

export const fetchSuccess = (recommendations) => ({
  type: 'SUCCESS',
  recommendations
});

export const fetchError = (error) => ({
  type: "ERROR",
  error
});

export const fetchPending = () => ({
  type: "PENDING"
});