import { createSelector } from 'reselect';

const selectDeviceType = (store) => store.device.type;

export const selectMobileDevice = createSelector(
  selectDeviceType,
  (type) => type.mobile
);

export const selectTabletDevice = createSelector(
  selectDeviceType,
  (type) => type.tablet
);

export const selectDesktopDevice = createSelector(
  selectDeviceType,
  (type) => type.desktop
);
