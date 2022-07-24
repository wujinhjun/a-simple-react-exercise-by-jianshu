import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addMoreList = (result, nextPage) => ({
    type: actionTypes.ADD_LIST_ARTICLE,
    list: fromJS(result),
    page: nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('./api/home.json')
            .then((res) => {
                const result = res.data.data;
                dispatch(changeHomeData(result));
            })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('./api/homeList.json?page=' + page)
            .then((res) => {
                const result = res.data.data;
                dispatch(addMoreList(result, page + 1));
            })
    }
}

export const getToggleShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    showIf: show,
})