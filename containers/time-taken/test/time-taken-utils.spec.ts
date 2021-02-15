import { calcDuration } from '../time-taken-utils';
import {
  HALF_DISTANCE_ZERO,
  HALF_DISTANCE_ZERO_TIME_TAKEN,
  HALF_SPEED_ZERO,
  HALF_SPEED_ZERO_TIME_TAKEN,
  FULL_DATA_DURATION,
  FULL_DATA_DURATION_TIME_TAKEN
} from './time-taken-mock-data';

describe('time taken utils', () => {
  it('should return 160 time unit with HALF_DISTANCE_ZERO passed in', () => {
    expect(calcDuration(HALF_DISTANCE_ZERO)).toEqual(HALF_DISTANCE_ZERO_TIME_TAKEN);
  });

  it('should return 140 time unit with HALF_SPEED_ZERO passed in', () => {
    expect(calcDuration(HALF_SPEED_ZERO)).toEqual(HALF_SPEED_ZERO_TIME_TAKEN);
  });

  it('should return 265 time unit with FULL_DATA_DURATION passed in', () => {
    expect(calcDuration(FULL_DATA_DURATION)).toEqual(FULL_DATA_DURATION_TIME_TAKEN);
  });
})