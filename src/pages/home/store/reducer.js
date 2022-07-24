import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showIf: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        "topicList": fromJS(action.topicList),
        "articleList": fromJS(action.articleList),
        "recommendList": fromJS(action.recommendList),
    });
};

const addListArticle = (state, action) => {
    return state.merge({
        'articleList': state.get("articleList").concat(action.list),
        'articlePage': action.page,
    });
}

const reducerHome = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_LIST_ARTICLE:
            return addListArticle(state, action);
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showIf', action.showIf);
        default:
            return state;
    }
}

export default reducerHome;