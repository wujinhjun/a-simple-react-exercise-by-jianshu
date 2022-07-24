import { actionTypes } from '.';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '',
    content: '',
    id: ''
});

const reducerDetail = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
                id: action.id
            })
        default:
            return state;
    }
}

export default reducerDetail;