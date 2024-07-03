import actionTypes from "./actionTypes";

export const UpdateLocationAction = (location) => ({
  type: actionTypes.UPDATE_FIND_LOCATION,
  location: location,
});
