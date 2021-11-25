import {SET_CATALOG_DATA} from './types';
import CatalogApi from "../../api/api";

export const setCatalogAction = (payload) => {
    return {
        type: SET_CATALOG_DATA,
        payload,
    };
};

export const fetchCatalogData = (path, metaPath, brands, price) => {
    return async (dispatch) => {

        const result = await CatalogApi.getCatalog(path, metaPath, brands, price);

        if (result.data) {
            dispatch(setCatalogAction(result.data));
        }
    };
};
