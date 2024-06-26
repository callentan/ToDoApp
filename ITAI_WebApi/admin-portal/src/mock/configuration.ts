import { Configuration } from '../model/configuration';

export const autoDeletion7days: Configuration = {
  autoDeletion: {
    isEnabled: true,
    days: 7,
  },
};
export const autoDeletionOff: Configuration = {
  autoDeletion: {
    isEnabled: false,
    days: 7,
  },
};
