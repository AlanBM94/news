import { combineReducers } from 'redux';
import newsReducer from './news';

const reducers = combineReducers({
    news: newsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
