import {
  SET_SELECT_ALL,
  SET_SELECT_SINGLE,
  SET_SITEMAPS,
  SET_DELETE_SITEMAP,
  SET_FILTER_URLS,
  SET_FILTER_STATUS,
} from './const';

export default {
  [SET_SELECT_ALL]: (state, payload) => state.selected = payload ? state.sitemaps.map(sitemap => sitemap.path) : state.selected = [],
  [SET_SELECT_SINGLE]: (state, {checked, path}) => {
    state.selected = checked ? [...state.selected, path] : state.selected.filter(selectedItem => selectedItem !== path);
  },
  [SET_SITEMAPS]: (state, payload) => state.sitemaps = payload,
  [SET_DELETE_SITEMAP]: (state, payload) => {
    if (payload) {
      state.sitemaps = state.sitemaps.filter(({ path }) => path !== payload);
    } else {
      let newSelected = [...state.selected];
      let newSitemaps = [...state.sitemaps];

      state.selected.forEach(item => {
        newSelected = newSelected.filter(newItem => newItem !== item);
        newSitemaps = newSitemaps.filter(sitemap => sitemap.path !== item);
      })

      state.selected = newSelected;
      state.sitemaps = newSitemaps;
    }
  },
  [SET_FILTER_URLS]: (state, payload) => state.filterSettings.urlFilter = payload,
  [SET_FILTER_STATUS]: (state, payload) => state.filterSettings.statusFilter = payload,
}