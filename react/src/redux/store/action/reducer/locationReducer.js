import actionTypes from "../actionTypes";

const initialState = {
  lat: 0,
  lng: 0,
  place_name: "",
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIND_LOCATION:
      return {
        ...state,

        lat: action.location.lat || 0,
        lng: action.location.lng || 0,
        place_name: action.location.place_name || "",
      };

    default:
      return state;
  }
};
