import {
  GET_SITEMAPS,
  GET_COUNT_SELECTED,
} from './const'

import { filterSitemaps } from '@/utils/index'

export default {
  [GET_SITEMAPS]: state => {
    const sitemaps = state.sitemaps.map(sitemap => ({
      ...sitemap,
      checked: state.selected.find(item => item === sitemap.path) ? true : false,
    }))

    return filterSitemaps(state.filterSettings, sitemaps);
  },
  [GET_COUNT_SELECTED]: state => state.selected.length,
}