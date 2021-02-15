import { inject } from '../vehicles-utils';
import { VEHICLES, VEHICLES_MOCK } from './vehicles-mock-data';

describe('vehicles utils - inject', () => {
  it('should inject capacity and usage keys in each vehicle item', () => {
    expect(inject(VEHICLES)).toEqual(VEHICLES_MOCK);
  })
});