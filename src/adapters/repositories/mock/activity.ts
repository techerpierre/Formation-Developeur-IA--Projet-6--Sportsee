import { GetSelfActivityParams, RunningData } from '@/core/domain/activity';
import { IActivityRepository } from '@/core/ports/repositories';
import data from './data.json';

/**
 * Mock activity repository to mock the activity repository.
 */
export class MockActivityRepository implements IActivityRepository {
  async getSelfActivity(params: GetSelfActivityParams): Promise<RunningData[]> {
    const selfActivities = data[0].runningData.filter((activity) => {
      const date = new Date(activity.date);
      return date >= params.startDate && date <= params.endDate;
    });
    return selfActivities.map(this.toRunningData);
  }

  /**
   * Map mock activity to RunningData
   * @param runningData data to map
   * @returns mapped RunningData
   */
  private toRunningData(
    runningData: (typeof data)[0]['runningData'][0]
  ): RunningData {
    return {
      date: new Date(runningData.date),
      distance: runningData.distance,
      duration: runningData.duration,
      heartRate: {
        min: runningData.heartRate.min,
        max: runningData.heartRate.max,
        average: runningData.heartRate.average,
      },
      caloriesBurned: runningData.caloriesBurned,
    };
  }
}
