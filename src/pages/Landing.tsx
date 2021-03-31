import React, { useEffect } from 'react';
import { useActions } from './../hooks/use-actions';
import { useTypedSelector } from './../hooks/use-typed-selector';
import NewsContainer from './../components/NewsContainer';

const Landing: React.FC = () => {
    const { getNews, setCategory } = useActions();
    const data = useTypedSelector((state) => state.news.data);
    const category = useTypedSelector((state) => state.news.category);
    const loading = useTypedSelector((state) => state.news.loading);
    const error = useTypedSelector((state) => state.news.error);

    useEffect(() => {
        setCategory('');
        getNews(1);
    }, []);

    const fetchMoreData = () => {
        getNews(data.currentPage + 1);
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

export default Landing;
