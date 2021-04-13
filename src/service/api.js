import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
});

export default api;