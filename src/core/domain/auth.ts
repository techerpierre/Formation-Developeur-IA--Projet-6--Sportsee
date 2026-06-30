/**
 * Declare all the domain entities for the authentication.
 */

/**
 * Represents the payload for a login request.
 */
export type LoginPayload = {
  username: string;
  password: string;
};

/**
 * Represents the authentication session.
 */
export type AuthSession = {
  token: string;
  userId: string;
};
