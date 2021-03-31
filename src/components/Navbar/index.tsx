import React, { useState } from 'react';
import './navbar.scss';
import ArrowDown from './../../icons/ArrowDown';
import Search from './../Search';
import ResponsiveNavbar from './../ResponsiveNavbar';
import { Link } from 'react-router-dom';
import { useActions } from './../../hooks/use-actions';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const { pathname } = useLocation();
    const { setCategory } = useActions();
    const [responsive, setResponsive] = useState(false);

    return (
        <>
            <div className="navbar">
                <ResponsiveNavbar
                    responsive={responsive}
                    setResponsive={setResponsive}
                />
                <div className="navbar__title">
                    <Link to="/">
                        <span>Noticias</span>
                    </Link>
                </div>
                <div className="navbar__categories">
                    <span>
                        Categorías
                        <ArrowDown />
                    </span>
                    <ul>
                        <li>
                            <Link
                                to="/entertainment"
                                className={`${
                                    pathname === '/entertainment'
                                        ? 'disabled-link'
                                        : ''
                                }`}
                                onClick={() => setCategory('entertainment')}
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
                                onClick={() => setCategory('sports')}
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
                                onClick={() => setCategory('science')}
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
                                onClick={() => setCategory('politics')}
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
                                onClick={() => setCategory('economy')}
                            >
                                Economía
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar__search">
                    <Search responsive={false} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
