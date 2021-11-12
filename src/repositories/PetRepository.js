import Repository from './Repository';
const resource = '/pets';

export default {
  async getPet(id) {
    let response = await Repository.get(`${resource}/${id}`);

    return response;
  },

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

  async addSize(data) {
    let response = await Repository.post(`${resource}/size`, data);

    return response;
  },

  async addVaccine(data) {
    let response = await Repository.post(`${resource}/vaccine`, data);

    return response;
  },

  async getVaccines(id) {
    let response = await Repository.get(`/vaccines/${id}`);

    return response;
  },

  async getFeatures(id) {
    let response = await Repository.get(`${resource}/features/${id}`);

    return response;
  },

  async deleteTurn(id) {
    let response = await Repository.delete(`${resource}/${id}`);

    return response;
  },
};