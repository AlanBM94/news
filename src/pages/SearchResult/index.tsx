import React, { useEffect } from 'react';
import { useActions } from './../../hooks/use-actions';
import { useTypedSelector } from './../../hooks/use-typed-selector';
import NewsContainer from './../../components/NewsContainer';
import { useParams } from 'react-router-dom';

interface RouteParams {
    keyword: string;
}

const SearchResult: React.FC<RouteParams> = () => {
    const { getNews, setCategory } = useActions();
    const data = useTypedSelector((state) => state.news.data);
    const category = useTypedSelector((state) => state.news.category);
    const loading = useTypedSelector((state) => state.news.loading);
    const error = useTypedSelector((state) => state.news.error);
    let { keyword } = useParams<RouteParams>();

    useEffect(() => {
        setCategory(keyword);
        getNews(1, keyword);
    }, [keyword]);

    const fetchMoreData = () => {
        getNews(data.currentPage + 1, keyword);
    };

    return (
        <NewsContainer
            loading={loading}
            category={category}
            data={data}
            error={error}
            fetchMoreData={fetchMoreData}
        />
    );
};

export default SearchResult;
