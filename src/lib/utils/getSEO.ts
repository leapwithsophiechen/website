import { seo } from '@/data';

export const getSEO = (pathname: string, subpath?: string) => {
  //
  const normalizePath = (str: string) => {
    //
    if (str.length === 1 && str === '/') {
      return str;
    }
    if (!subpath) {
      if (str.endsWith('/')) {
        return str.slice(0, -1);
      }
      return str;
    }
    if (subpath) {
      return str.replace(`/${subpath.toLowerCase()}`, '');
    }
    return null;
  };

  const pageSeo = seo.filter((page) => page.page === normalizePath(pathname));

  if (pageSeo[0]) {
    return {
      description: pageSeo[0].description,
      title: pageSeo[0].title,
    };
  }

  return {
    description: '',
    title: 'Official Site',
  };
};
