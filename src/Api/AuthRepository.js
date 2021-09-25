import Repository from './Repository';
const resource = '/auth';

export default {
  async signIn(data) {
    let response = await Repository.post(`${resource}/login`, data);

    return response;
  },

  async signUp(data) {
    let response = await Repository.post(`${resource}/signup`, data);

    return response;
  },

  async userData() {
    let response = await Repository.get(`${resource}/user`);

    return response;
  },
};