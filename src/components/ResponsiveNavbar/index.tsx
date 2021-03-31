import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useActions } from './../../hooks/use-actions';
import Search from './../Search';
import './responsiveNavbar.scss';

interface ResponsiveNavbarProps {
    setResponsive: (responsive: boolean) => void;
    responsive: boolean;
}

const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({
    setResponsive,
    responsive,
}) => {
    const { pathname } = useLocation();
    const { setCategory } = useActions();

    return (
        <>
            <div className="navbar__responsiveIcon">
                <i
                    className="fas fa-bars"
                    onClick={() => setResponsive(!responsive)}
                ></i>
            </div>
            <div
                className={`navbar--responsive ${
                    responsive ? 'navbar--responsive--active' : ''
                }`}
            >
                <div className="navbar--responsive__close">
                    <i
                        className="fas fa-times"
                        onClick={() => setResponsive(!responsive)}
                    ></i>
                </div>
                <div className="navbar--responsive__content">
                    <Search
                        responsive={true}
                        closeResponsiveMenu={() => setResponsive(!responsive)}
                    />
                    <div className="navbar--responsive__categories">
                        <ul>
                            <li>
                                <Link
                                    to="/entertainment"
                                    className={`${
                                        pathname === '/entertainment'
                                            ? 'disabled-link'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setResponsive(!responsive);
                                        setCategory('entertainment');
                                    }}
                                >
                                    Entretenimiento
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/sports"
                                    className={`${
                                        pathname === '/sports'
                                            ? 'disabled-link'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setResponsive(!responsive);
                                        setCategory('sports');
                                    }}
                                >
                                    Deportes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/science"
                                    className={`${
                                        pathname === '/science'
                                            ? 'disabled-link'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setResponsive(!responsive);
                                        setCategory('science');
                                    }}
                                >
                                    Ciencia
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/politics"
                                    className={`${
                                        pathname === '/politics'
                                            ? 'disabled-link'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setResponsive(!responsive);
                                        setCategory('politics');
                                    }}
                                >
                                    Política
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/economy"
                                    className={`${
                                        pathname === '/economy'
                                            ? 'disabled-link'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setResponsive(!responsive);
                                        setCategory('economy');
                                    }}
                                >
                                    Economía
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResponsiveNavbar;
