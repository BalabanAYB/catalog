import { SET_DEVICE } from './types';

const initialState = {
  type: {
    mobile: false,
    tablet: false,
    desktop: true,
  },
};

export default function DeviceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEVICE:
      return {
        ...state,
        type: action.payload,
      };
    default: {
      return state;
    }
  }
}
