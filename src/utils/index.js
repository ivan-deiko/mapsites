// function for filter sitemaps
export function filterSitemaps(filterSettings, sitemaps) {
  const { urlFilter, statusFilter } = filterSettings;
  let filteredSitemaps = [...sitemaps];
   
  // switch for url filter
  switch(urlFilter.type) {
    case 'Sitemap contains':
      filteredSitemaps = filteredSitemaps.filter(sitemap => sitemap.path.includes(urlFilter.text))
      break;
    case `Sitemap doesn't contain`:
      filteredSitemaps = filteredSitemaps.filter(sitemap => !sitemap.path.includes(urlFilter.text))
      break;
    case 'Exact match':
      filteredSitemaps = filteredSitemaps.filter(sitemap => sitemap.path === urlFilter.text)
      break;
  }

  // filter for status
  if (statusFilter === 'Success') {
    return filteredSitemaps.filter(sitemap => !sitemap.errors);
  } else if (statusFilter === 'All sitemaps') {
    return filteredSitemaps;
  } else {
    return filteredSitemaps.filter(sitemap => sitemap.errors);
  }

}