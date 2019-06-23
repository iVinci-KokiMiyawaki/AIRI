import { userConstants } from '../constants';

const initialState = {
  loading: false,
  me: {},
  users: {},
};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_ME_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case userConstants.GET_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        me: action.payload,
      };
    case userConstants.GET_ME_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case userConstants.CLEAR_ME:
      return {
        ...state,
        me: {},
      }
    case userConstants.GET_LIST_REQUEST:
      return {
        ...state,
        error: false,
      };
    case userConstants.GET_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case userConstants.GET_LIST_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state
  }
}