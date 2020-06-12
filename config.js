export const END_POINT =
  // process.env.NODE_ENV === 'production'
  process.env.NODE_ENV === 'development'
    ? 'https://api.teplobrest.by/'
    : 'http://localhost:4000/';
export const INITIAL_PAGE_SIZE = 12;
