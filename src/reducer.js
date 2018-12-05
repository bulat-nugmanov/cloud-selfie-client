import type {ReduxState} from "./types";

const initialState : ReduxState = {
  fetching: false,
  recommendations: [],
  error: undefined
};

const reducer = (state: ReduxState = initialState, action) => {

  switch (action.type) {

    case 'SUCCESS':
      return {
        fetching: false,
        recommendations: action.recommendations,
        error: undefined
      };

    case 'ERROR':
      return {
        fetching: false,
        error: action.error,
        ...state
      };

    case 'PENDING':
      return {
        fetching: true,
        error: undefined,
        ...state
      };

    default:
      return initialState;

  }

};

export default reducer;