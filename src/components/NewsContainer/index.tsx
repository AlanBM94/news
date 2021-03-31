import React from 'react';
import Loading from './../Loading';
import Error from './../Error/';
import Title from './../Title/';
import InfiniteScroll from 'react-infinite-scroll-component';
import New from './../New';
import { ArticlesPayload } from './../../state';

interface NewsContainerProps {
    loading: boolean;
    error: string | null;
    category: string;
    data: ArticlesPayload;
    fetchMoreData: () => void;
}

const NewsContainer: React.FC<NewsContainerProps> = ({
    loading,
    error,
    category,
    data,
    fetchMoreData,
}) => {
    return (
        <div className="container__content">
            {loading && <Loading />}
            {!loading && error && <Error text={error} />}
            {!loading && !error && (
                <Title text={category === '' ? 'today' : category} />
            )}

            <div className="container__news">
                <InfiniteScroll
                    dataLength={data.articles.length}
                    next={fetchMoreData}
                    hasMore={
                        data.articles.length < data.totalResults - 1 &&
                        data.articles.length < 99
                    }
                    loader={<Loading />}
                    className="container__news"
                >
                    {data.articles.map((article) => (
                        <New
                            key={`${article.title}-${article.publishedAt}`}
                            author={
                                article.author
                                    ? article.author
                                    : 'Autor desconocido'
                            }
                            title={article.title}
                            description={article.description}
                            image={
                                article.urlToImage
                                    ? article.urlToImage
                                    : 'https://i2.wp.com/cubabluediving.com/wp-content/uploads/2019/01/404-permalink.png?fit=4680%2C2080'
                            }
                            url={article.url}
                        />
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default NewsContainer;
