/**
 * Declare all the domain entities for the activity.
 */

/**
 * Represents the heart rate data.
 */
export type HeartRate = {
  min: number;
  max: number;
  average: number;
};

/**
 * Represents the running data.
 */
export type RunningData = {
  date: Date;
  distance: number;
  duration: number;
  heartRate: HeartRate;
  caloriesBurned: number;
};

/**
 * Represents the parameters for getting the self activity.
 */
export type GetSelfActivityParams = {
  startDate: Date;
  endDate: Date;
};
