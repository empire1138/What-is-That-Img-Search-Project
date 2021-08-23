import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID FjtFMN4T74Vm5j7EyU89JbmqbOBeEkD3aklZBulHNhs',
  },
});
