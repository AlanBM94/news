import React, { useEffect } from 'react';
import { useActions } from './../../hooks/use-actions';
import { useTypedSelector } from './../../hooks/use-typed-selector';
import NewsContainer from './../../components/NewsContainer';

const Politics: React.FC = () => {
    const { getNews } = useActions();
    const data = useTypedSelector((state) => state.news.data);
    const category = useTypedSelector((state) => state.news.category);
    const loading = useTypedSelector((state) => state.news.loading);
    const error = useTypedSelector((state) => state.news.error);

    useEffect(() => {
        getNews(1, 'politics');
    }, []);

    const fetchMoreData = () => {
        getNews(data.currentPage + 1, 'politics');
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

export default Politics;
