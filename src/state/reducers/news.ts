import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';
import { ArticlesPayload } from '../Article';

interface NewsState {
    loading: boolean;
    error: string | null;
    category: string;
    data: ArticlesPayload;
}

const initialState: NewsState = {
    loading: false,
    error: null,
    category: '',
    data: {
        status: '',
        totalResults: 0,
        currentPage: 0,
        articles: [],
    },
};

const reducer = produce((state: NewsState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_NEWS:
            state.loading = true;
            return state;
        case ActionType.FETCH_NEWS_COMPLETE:
            state.data.articles = [
                ...state.data.articles,
                ...action.payload.articles,
            ];
            state.data.status = action.payload.status;
            state.data.currentPage = action.payload.currentPage;
            state.data.totalResults = action.payload.totalResults;
            state.loading = initialState.loading;
            state.error = initialState.error;
            return state;
        case ActionType.FETCH_NEWS_ERROR:
            state.error = action.payload;
            state.loading = initialState.loading;
            state.data = initialState.data;
            return state;
        case ActionType.SET_CATEGORY:
            state.category = action.payload;
            state.data = initialState.data;
            return state;
        default:
            return state;
    }
});

export default reducer;
