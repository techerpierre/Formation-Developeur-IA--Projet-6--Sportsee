import { AuthSession } from '../domain/auth';
import { ISessionRepository } from '../ports/repositories';

/**
 * Session service to manage the session storage
 */
export class SessionService {
  constructor(private readonly sessionRepository: ISessionRepository) {}

  /**
   * Get the stored session.
   * @returns The stored session (return null if the session is not set).
   */
  async get(): Promise<AuthSession | null> {
    return this.sessionRepository.get();
  }

  /**
   * Verify the authentication based on stored session.
   */
  async isAuthenticated(): Promise<boolean> {
    return !!await this.sessionRepository.get();
  }
}
