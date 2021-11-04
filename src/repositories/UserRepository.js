import Repository from './Repository';
const resource = '/users';

export default {
  async getUser(id) {
    let response = await Repository.get(`${resource}/`+id);

    return response;
  },

  async getUsers() {
    let response = await Repository.get(`${resource}`);

    return response;
  },

  async updateUser(data, id) {
    let response = await Repository.put(`${resource}/`+id, data);

    return response;
  },

  async deleteUser(id) {
    let response = await Repository.delete(`${resource}/`+id);

    return response;
  }
};