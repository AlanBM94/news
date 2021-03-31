import React, { useState } from 'react';
import './search.scss';
import SearchIcon from './../../icons/Search';
import { useActions } from './../../hooks/use-actions';
import { Redirect } from 'react-router-dom';

interface SearchProps {
    responsive: boolean;
    closeResponsiveMenu?: () => void;
}

const Search: React.FC<SearchProps> = ({ responsive, closeResponsiveMenu }) => {
    const [inputValue, setInputValue] = useState('');
    const [param, setParam] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setCategory } = useActions();

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (closeResponsiveMenu) closeResponsiveMenu();

        let urlkeyword = window.location.pathname.split('/')[
            window.location.pathname.split('/').length - 1
        ];

        if (urlkeyword !== inputValue.toLocaleLowerCase()) {
            setRedirect(true);
            setCategory(inputValue);
            setParam(inputValue);
            setInputValue('');
        }
    };

    return (
        <>
            {redirect && <Redirect to={`/search/${param}`} />}
            <div className={`search ${responsive ? 'search--responsive' : ''}`}>
                <form action="#" onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        value={inputValue}
                    />
                    <button>
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </>
    );
};

export default Search;
