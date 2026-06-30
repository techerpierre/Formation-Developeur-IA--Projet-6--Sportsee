import { HttpClientBuilder } from '@/libs/http';
import env from './env';
import { cookies } from 'next/headers';

/**
 *
 * @returns
 */
async function authorizationMethode(): Promise<string | null> {
  const cookiesStore = await cookies();
  const jwt = cookiesStore.get(env.JWT_STORED_KEY);
  return jwt ? `Bearer ${jwt.value}` : null;
}

/** */
const apiHttpClient = new HttpClientBuilder(env.API_BASE_URL)
  .setAuthorizationMethode(authorizationMethode)
  .build();

export default apiHttpClient;
