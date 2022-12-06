import axios from 'axios';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchQuery() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '31833677-37f850fc83a2da04e94b97183';
    const optionParam = new URLSearchParams({
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: 40,
    });

    const url = `${BASE_URL}?key=${KEY}&${optionParam}`;

    try {
      const response = await axios.get(url);
      this.page += 1;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
