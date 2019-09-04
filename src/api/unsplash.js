import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c59e14f9eb75a1ccba65ac8c6c564af19299c8cd474cae34566789061532f5a5'
  }
}); 