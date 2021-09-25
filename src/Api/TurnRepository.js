import Repository from './Repository';
const resource = '/turns';

export default {
  async getTurns() {
    let response = await Repository.get(`${resource}`);

    return response;
  },

  async createTurn(data) {
    let response = await Repository.post(`${resource}/create`, data);

    return response;
  },

  async deleteTurn(id) {
    let response = await Repository.delete(`${resource}/${id}`);

    return response;
  },
};