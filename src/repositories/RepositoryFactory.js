import AuthRepository from './AuthRepository';
import TurnRepository from './TurnRepository';
import UserRepository from './UserRepository';

const repositories = {
  auth: AuthRepository,
  user: UserRepository,
  turn: TurnRepository
};

export const RepositoryFactory = {
  get: name => repositories[name],
};