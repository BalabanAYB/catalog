import { createSelector } from 'reselect';

const selectCatalogData = createSelector(
  (store) => store.catalog.data,
  (data) => data
);

export default selectCatalogData;
