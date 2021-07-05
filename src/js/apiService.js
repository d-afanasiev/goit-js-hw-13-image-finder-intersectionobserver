const API_KEY = '22136016-e39418b2246c5d0d9deda411e';
const BASE_URL = 'https://pixabay.com/api';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&per_page=12&page=${this.page}`;
    const fetchUrl = await fetch(url);
    const resultFetch = await fetchUrl.json();
    this.page += 1;

    return resultFetch.hits;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
