import { SET_CATALOG_DATA } from './types';

const initialState = {
  data: [],
};

export default function CatalogReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATALOG_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return state;
    }
  }
}
