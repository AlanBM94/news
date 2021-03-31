import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from './../actions';
import { ActionType } from './../action-types';
import { ArticlesPayload } from './../Article';

// API KEY f59545c2d0354ad4a6db1e4880a08ba5

export const getNews = (page: number = 1, category?: string) => async (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: ActionType.FETCH_NEWS });
    if (page === 1) {
        dispatch({ type: ActionType.CLEAN_DATA });
    }
    let url = `https://newsapi.org/v2/top-headlines?country=mx&pageSize=20&page=${page}&apiKey=f59545c2d0354ad4a6db1e4880a08ba5`;

    if (category) {
        url = `https://newsapi.org/v2/everything?q=${category}&language=es&pageSize=20&page=${page}&apiKey=f59545c2d0354ad4a6db1e4880a08ba5`;
    }

    try {
        const {
            data,
        }: {
            data: ArticlesPayload;
        } = await axios.get(url);

        const payloadInfo = data;
        payloadInfo.currentPage = page;

        dispatch({
            type: ActionType.FETCH_NEWS_COMPLETE,
            payload: payloadInfo,
        });
    } catch (error) {
        dispatch({
            type: ActionType.FETCH_NEWS_ERROR,
            payload: error.message,
        });
    }
};

export const setCategory = (category: string) => (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: ActionType.SET_CATEGORY, payload: category });
};
