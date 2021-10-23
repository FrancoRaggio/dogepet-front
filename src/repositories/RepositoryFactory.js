import AuthRepository from './AuthRepository';
import TurnRepository from './TurnRepository';
import UserRepository from './UserRepository';
import PetRepository from './PetRepository';
import DashboardRepository from './DashboardRepository';

const repositories = {
  auth: AuthRepository,
  user: UserRepository,
  turn: TurnRepository,
  pet: PetRepository,
  dashboard: DashboardRepository
};

export const RepositoryFactory = {
  get: name => repositories[name],
};