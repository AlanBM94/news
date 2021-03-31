import React from 'react';
import './loading.scss';

const Loading: React.FC = () => {
    return (
        <div className="loading ">
            <h3 className="loading__text animate__animated animate__bounce animate__infinite	infinite">
                Cargando...
            </h3>
        </div>
    );
};

export default Loading;
