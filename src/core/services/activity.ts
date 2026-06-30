import { GetSelfActivityParams, RunningData } from '../domain/activity';
import { IActivityRepository } from '../ports/repositories';

/**
 * Activity service to manage the activities.
 */
export class ActivityService {
  constructor(private readonly activityRepository: IActivityRepository) {}

  /**
   * Get the self activity.
   * @param params The parameters for getting the self activity.
   * @returns The self activity.
   */
  async getSelfActivity(params: GetSelfActivityParams): Promise<RunningData[]> {
    return this.activityRepository.getSelfActivity(params);
  }
}
