import Repository from './Repository';
const resource = '/dashboard';

export default {
  async getDashboard() {
    let response = await Repository.get(`${resource}`);

    return response;
  },

  async getVaccines() {
    let response = await Repository.get(`vaccines`);

    return response;
  },

  async getMedicines() {
    let response = await Repository.get(`medicines`);

    return response;
  }
};