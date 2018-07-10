
import { fromJS } from 'immutable';
import fundContainerReducer from '../reducer';

describe('fundContainerReducer', () => {
  it('returns the initial state', () => {
    expect(fundContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
