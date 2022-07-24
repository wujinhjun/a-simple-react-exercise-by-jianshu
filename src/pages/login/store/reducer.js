import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false,
});

const reducerLogin = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login', action.value);
        case actionTypes.CHANGE_LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}

export default reducerLogin;