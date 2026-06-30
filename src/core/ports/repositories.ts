/**
 * Declare all the repositories for the application.
 */
import { LoginPayload } from '@/core/domain/auth';
import { AuthSession } from '@/core/domain/auth';
import { UserInfos } from '../domain/user';
import { GetSelfActivityParams, RunningData } from '../domain/activity';

/**
 * Represents the repository for authentication.
 */
export interface IAuthRepository {
  /**
   * Login the user.
   * @param payload The login payload.
   * @returns The authentication session.
   */
  login(payload: LoginPayload): Promise<AuthSession>;
}

/**
 * Represents the repository for user.
 */
export interface IUserRepository {
  /**
   * Get the self infos.
   * @returns The self infos.
   */
  getSelfInfos(): Promise<UserInfos>;
}

/**
 * Represents the repository for activity.
 */
export interface IActivityRepository {
  /**
   * Get the self activity.
   * @param params The parameters for getting the self activity.
   * @returns The self activity.
   */
  getSelfActivity(params: GetSelfActivityParams): Promise<RunningData[]>;
}

/**
 * Represents the repository for session storage
 */
export interface ISessionRepository {
  /**
   * Store user session
   * @param session the session to store.
   */
  store(session: AuthSession): Promise<void>;
  /**
   * Get the stored session.
   * @returns The stored session.
   */
  get(): Promise<AuthSession | null>;
}
