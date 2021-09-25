import AuthRepository from './AuthRepository';

const repositories = {
  auth: AuthRepository,
};

export const RepositoryFactory = {
  get: name => repositories[name],
};