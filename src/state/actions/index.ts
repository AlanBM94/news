import { ActionType } from '../action-types';
import { ArticlesPayload } from './../Article';

export interface CleanDataAction {
    type: ActionType.CLEAN_DATA;
}

export interface FetchNewsAction {
    type: ActionType.FETCH_NEWS;
}

export interface FetchNewsCompleteAction {
    type: ActionType.FETCH_NEWS_COMPLETE;
    payload: ArticlesPayload;
}

export interface FetchNewsErrorAction {
    type: ActionType.FETCH_NEWS_ERROR;
    payload: string;
}

export interface SetCategoryAction {
    type: ActionType.SET_CATEGORY;
    payload: string;
}

export type Action =
    | CleanDataAction
    | FetchNewsAction
    | FetchNewsCompleteAction
    | FetchNewsErrorAction
    | SetCategoryAction;
