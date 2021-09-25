import AuthRepository from './AuthRepository';
import TurnRepository from './TurnRepository';

const repositories = {
  auth: AuthRepository,
  turn: TurnRepository
};

export const RepositoryFactory = {
  get: name => repositories[name],
};