import { handleActions } from 'redux-actions';
import { TYPE } from './LoginAction';

const initialState = {
  isStatus: false,
};

export const Reducer = handleActions(
  {
    [TYPE.LOGIN_REQUEST]: (state, action) => ({
      ...state
    }),
    [TYPE.LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      isStatus: true,
    }),
    [TYPE.LOGIN_FAIL]: (state, action) => ({
      ...state,
      isStatus: false,
    })
  },
  initialState
);
