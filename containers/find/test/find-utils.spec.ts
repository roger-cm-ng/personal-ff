import { checkReadyToLaunch, constructBody } from '../find-utils';
import { BODY, NOT_READY_TO_LAUNCH, READY_TO_LAUNCH, TOKEN } from './find-mock-data';

describe('find utils - check ready to launch', () => {
  it('should return false when condition is not met', () => {
    expect(checkReadyToLaunch(NOT_READY_TO_LAUNCH)).toEqual(false);
  })

  it('should return true when condition is met', () => {
    expect(checkReadyToLaunch(READY_TO_LAUNCH)).toEqual(true);
  })
})

describe('find utils - construct body', () => {
  it('should construct the body for the find endpoint', () => {
    expect(constructBody(TOKEN, READY_TO_LAUNCH)).toEqual(BODY);
  })
})