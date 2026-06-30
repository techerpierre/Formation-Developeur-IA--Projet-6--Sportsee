import { UserInfos } from '@/core/domain/user';
import { IUserRepository } from '@/core/ports/repositories';
import data from './data.json';

/**
 * Mock user repository to mock the user repository.
 */
export class MockUserRepository implements IUserRepository {
  async getSelfInfos(): Promise<UserInfos> {
    const user = data[0];
    return this.toUserInfos(user);
  }

  /**
   * Map mock user to UserInfos
   * @param user data to map
   * @returns mapped UserInfos
   */
  private toUserInfos(user: (typeof data)[0]): UserInfos {
    const totalDistance = user.runningData.reduce(
      (prev, current) => prev + current.distance,
      0
    );
    const totalSessions = user.runningData.length;
    const totalDuration = user.runningData.reduce(
      (prev, current) => prev + current.duration,
      0
    );

    return {
      profile: {
        firstName: user.userInfos.firstName,
        lastName: user.userInfos.lastName,
        createdAt: new Date(user.userInfos.createdAt),
        age: user.userInfos.age,
        weight: user.userInfos.weight,
        height: user.userInfos.height,
        profilePicture: user.userInfos.profilePicture,
      },
      statistics: {
        totalDistance,
        totalSessions,
        totalDuration,
      },
    };
  }
}
