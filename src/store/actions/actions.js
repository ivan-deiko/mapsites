import { 
  SET_SELECT_ALL,
  SET_SELECT_SINGLE,
  SET_SITEMAPS,
  SET_DELETE_SITEMAP,
  SET_FILTER_URLS,
  SET_FILTER_STATUS,
} from '../mutations/const';

import { 
  SELECT_ALL,
  FETCH_SITEMAPS,
  SELECT_SINGLE,
  DELETE_SITEMAP,
  FILTER_URLS,
  FILTER_STATUS,
} from './const';

export default {
  [SELECT_ALL]: ({ commit }, val) => commit(SET_SELECT_ALL, val) ,
  [FETCH_SITEMAPS]: ({ commit }) => {
    return fetch('https://semalt.net/dev/api/v1/example/test/')
      .then(data => data.json())
      .then(({ result }) => {
        commit(SET_SITEMAPS, result.sitemap);
        return result;
      })
      .catch(err => err)
  },
  [SELECT_SINGLE]: ({ commit }, val) => commit(SET_SELECT_SINGLE, val),
  [DELETE_SITEMAP]: ({ commit }, val) => commit(SET_DELETE_SITEMAP, val),
  [FILTER_URLS]: ({ commit }, val) => commit(SET_FILTER_URLS, val),
  [FILTER_STATUS]: ({ commit }, val) => commit(SET_FILTER_STATUS, val),
}