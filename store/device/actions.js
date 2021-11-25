import { SET_DEVICE } from './types';

export const setDeviceAction = (payload) => {
  return {
    type: SET_DEVICE,
    payload,
  };
};
