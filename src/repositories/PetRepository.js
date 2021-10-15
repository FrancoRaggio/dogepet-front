import Repository from './Repository';
const resource = '/pets';

export default {
  async getPets() {
    let response = await Repository.get(`${resource}`);

    return response;
  },

  async getPetsByUser() {
    let response = await Repository.get(`${resource}/user`);

    return response;
  },

  async createPet(data) {
    let response = await Repository.post(`${resource}/create`, data);

    return response;
  },

  async updatePet(data) {
    let response = await Repository.put(`${resource}/update`, data);

    return response;
  },

  async deleteTurn(id) {
    let response = await Repository.delete(`${resource}/${id}`);

    return response;
  },
};