import Repository from './Repository';
const resource = '/users';

export default {
  async updateUser(data) {
    let response = await Repository.put(`${resource}/update`, data);

    return response;
  }
};