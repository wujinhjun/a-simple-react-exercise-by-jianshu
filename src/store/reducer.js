import { combineReducers } from 'redux-immutable';
import { reducerHeader } from '../component/header/store';
import { reducerHome } from '../pages/home/store';
import { reducerDetail } from '../pages/details/store';
import { reducerLogin } from '../pages/login/store';

const reducer = combineReducers({
    header: reducerHeader,
    home: reducerHome,
    detail: reducerDetail,
    login: reducerLogin
})

export default reducer;