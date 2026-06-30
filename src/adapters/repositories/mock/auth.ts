import { AuthSession, LoginPayload } from '@/core/domain/auth';
import { IAuthRepository } from '@/core/ports/repositories';
import data from './data.json';
import { UnauthorizedError } from '@/core/domain/error';

/**
 * Mock auth repository to mock the auth repository.
 */
export class MockAuthRepository implements IAuthRepository {
  async login(payload: LoginPayload): Promise<AuthSession> {
    const user = data.find((user) => user.username === payload.username);

    if (!user || user.password !== payload.password) {
      throw new UnauthorizedError('Incorrect Email or Password');
    }

    return {
      token: 'random_mock_token ' + user.id,
      userId: user?.id,
    };
  }
}
