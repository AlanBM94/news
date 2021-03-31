import React from 'react';
import './new.scss';

interface NewProps {
    title: string;
    author: string;
    description: string;
    image: string;
    url: string;
}

const New: React.FC<NewProps> = ({
    title,
    author,
    description,
    image,
    url,
}) => {
    return (
        <div className="new">
            <img
                src={image}
                alt={title}
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                        'https://i2.wp.com/cubabluediving.com/wp-content/uploads/2019/01/404-permalink.png?fit=4680%2C2080';
                }}
            />
            <div className="new__content">
                <span>{author}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    Ver noticia
                </a>
            </div>
        </div>
    );
};

export default New;
