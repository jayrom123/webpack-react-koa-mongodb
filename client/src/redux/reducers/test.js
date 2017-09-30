/**
 * Created by Administrator on 2017/9/30.
 */

import {formJS} from "immutable";
import {INIT_STATE, LOADING} from '../constants/test';

const init = {
  loading: true,
  data:[]
};


const Test = (state = init, action) => {
  switch (action.type) {
    case INIT_STATE:
      return init;
    case LOADING:
      return fromJS(state).merge({loading: action.loading}).toJS();
    default:
      return state;
  }
};

export default Test;