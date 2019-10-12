import React from 'react';
import { Link } from 'react-router-dom';
import Ozeki from '../pictures/Ozeki.JPG';

const Home = () => {
    return (
        <>
            Home
        <nav>
                <ul>
                    <li>
                        <Link to="Dogs">
                            <img src={Ozeki} alt="link to dogs pictures" style={{ width: '200px' }}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="Cats">
                            <img src={Ozeki} alt="link to cats pictures" style={{ width: '200px' }} ></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="Foxes">
                            <img src={Ozeki} alt="link to foxes pictures" style={{ width: '200px' }}></img>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;
