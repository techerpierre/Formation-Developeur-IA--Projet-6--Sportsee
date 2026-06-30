import { IAuthRepository, ISessionRepository } from '@/core/ports/repositories';
import { LoginPayload } from '@/core/domain/auth';
import { AuthSession } from '@/core/domain/auth';

/**
 * Auth service to manage the authentication.
 */
export class AuthService {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly sessionRepository: ISessionRepository
  ) {}

  /**
   * Login the user.
   * @param payload The login payload.
   * @returns The authentication session.
   */
  async login(payload: LoginPayload): Promise<AuthSession> {
    const session = await this.authRepository.login(payload);
    await this.sessionRepository.store(session);
    return session;
  }
}
