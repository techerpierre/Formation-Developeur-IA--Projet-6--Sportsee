/**
 * Declare all the domain entities for the user.
 */

/**
 * Represents the user profile.
 */
export type UserProfile = {
  firstName: string;
  lastName: string;
  createdAt: Date;
  age: number;
  weight: number;
  height: number;
  profilePicture: string;
};

/**
 * Represents the user statistics.
 */
export type UserStatistics = {
  totalDistance: number;
  totalSessions: number;
  totalDuration: number;
};

/**
 * Represents the user information.
 */
export type UserInfos = {
  profile: UserProfile;
  statistics: UserStatistics;
};
