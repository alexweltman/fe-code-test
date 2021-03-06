import * as actionTypes from 'constants/actionTypes';
import createReducer    from '../createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.LOAD_DESIGNERS_PENDING]: (state) => state.set('areLoading', true),
  [actionTypes.LOAD_DESIGNERS_FULFILLED]: (state, { payload: { data } }) => state.merge({
    areLoading : false,
    loaded     : Immutable.fromJS(data.designers),
  }),
});
