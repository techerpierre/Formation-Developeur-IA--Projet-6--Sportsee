import env from '@/config/env';
import { AuthSession } from '@/core/domain/auth';
import type { ISessionRepository } from '@/core/ports/repositories';
import { cookies } from 'next/headers';

export class SessionRepository implements ISessionRepository {
  private readonly USER_ID_STORED_KEY = 'userId';

  async store(session: AuthSession): Promise<void> {
    const cookiesStore = await cookies();
    cookiesStore.set(env.JWT_STORED_KEY, session.token);
    cookiesStore.set(this.USER_ID_STORED_KEY, session.userId);
  }

  async get(): Promise<AuthSession | null> {
    const cookiesStore = await cookies();
    const token = cookiesStore.get(env.JWT_STORED_KEY);
    const userId = cookiesStore.get(this.USER_ID_STORED_KEY);

    if (!token || !userId) {
      return null;
    }

    return {
      token: token.value,
      userId: token.value,
    };
  }
}
