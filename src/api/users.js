import axios from 'axios';

export const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

const usersApi = {
  get: ()=> {
    return delay(1000).then(() => axios.get('/api/users').then((response) => response.data));
  }
};
export { usersApi };
