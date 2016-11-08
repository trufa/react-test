import expect from 'expect';
import questionsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('questionsReducer', () => {
  it('returns the initial state', () => {
    expect(questionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
