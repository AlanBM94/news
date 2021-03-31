import React from 'react';
import './error.scss';
import ErrorIcon from './../../icons/Error';

interface ErrorProps {
    text: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
    return (
        <div className="error">
            <ErrorIcon />
            <h4>Ooops! Parece que algo salió mal</h4>
            <p>{text}</p>
        </div>
    );
};

export default Error;
