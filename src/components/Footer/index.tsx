import React from 'react';
import './footer.scss';
import Love from './../../icons/Love';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__text">
                <p>
                    Este proyecto fue creado con <Love />
                    por Alan Beltrán Mendoza
                </p>
            </div>
            <div className="footer__links">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/alan-beltr%C3%A1n-mendoza-736718159/"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/AlanBM94"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/alan.beltranmendoza"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
