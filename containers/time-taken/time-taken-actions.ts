export const TIME_ADDED = 'TIME_ADDED';

export const addTime = (duration: number) => ({
  type: TIME_ADDED,
  duration
});
