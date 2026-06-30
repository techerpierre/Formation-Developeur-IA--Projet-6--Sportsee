import { IUserRepository } from '@/core/ports/repositories';
import { UserInfos } from '@/core/domain/user';

/**
 * User service to manage users.
 */
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Get the self infos.
   * @returns The self infos.
   */
  async getSelfInfos(): Promise<UserInfos> {
    return this.userRepository.getSelfInfos();
  }
}
