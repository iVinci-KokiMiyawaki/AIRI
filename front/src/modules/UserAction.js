import { userConstants } from '../constants';
import { userService } from '../services';

export const getMe = () => {
  return dispatch => {
    dispatch(getMeRequest());

    userService.getMe()
      .then(
        data => dispatch(getMeSuccess(data)),
        error => dispatch(getMeFailure(error))
      );
  };
}

const getMeRequest = () => ({
  type: userConstants.GET_ME_REQUEST
});
const getMeSuccess = (data) => ({
  type: userConstants.GET_ME_SUCCESS,
  payload: data
});
const getMeFailure = (error) => ({
  type: userConstants.GET_ME_FAILURE,
  error
});

export const clearMe = () => ({
  type: userConstants.CLEAR_ME
});

export const getList = () => {
  return dispatch => {
    dispatch(getListRequest());

    userService.getList()
      .then(
        data => dispatch(getListSuccess(data)),
        error => dispatch(getListFailure(error))
      );
  };
}

const getListRequest = () => ({
  type: userConstants.GET_LIST_REQUEST
});
const getListSuccess = (data) => ({
  type: userConstants.GET_LIST_SUCCESS,
  payload: data
});
const getListFailure = (error) => ({
  type: userConstants.GET_LIST_FAILURE,
  error
});