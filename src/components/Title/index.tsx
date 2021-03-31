import React from 'react';
import './title.scss';
import Moment from 'react-moment';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    let spanishText: string;
    switch (text) {
        case 'entertainment':
            spanishText = 'Entretenimiento';
            break;
        case 'sports':
            spanishText = 'Deportes';
            break;
        case 'science':
            spanishText = 'Ciencia';
            break;
        case 'politics':
            spanishText = 'Política';
            break;
        case 'economy':
            spanishText = 'Economía';
            break;
        default:
            spanishText = `${
                text[0].toLocaleUpperCase() + text.slice(1, text.length)
            }`;
    }
    return (
        <h4 className="title">
            {text === 'today' ? (
                <Moment format="DD/MM/YYYY">{new Date()}</Moment>
            ) : (
                spanishText
            )}
        </h4>
    );
};

export default Title;
