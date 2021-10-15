import Repository from './Repository';
const resource = '/users';

export default {
  async getUsers() {
    let response = await Repository.get(`${resource}`);

    return response;
  },

  async updateUser(data) {
    let response = await Repository.put(`${resource}/update`, data);

    return response;
  }
};