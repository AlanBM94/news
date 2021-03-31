export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ArticlesPayload {
    status: string;
    totalResults: number;
    currentPage: number;
    articles: Article[];
}
