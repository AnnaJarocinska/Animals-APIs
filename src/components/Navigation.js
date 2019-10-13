import React from 'react';
import {Link} from 'react-router-dom';
import Ozeki from '../pictures/Ozeki.png';
import cat from '../pictures/cat.jpg';
import fox from '../pictures/fox.jpg';

const Navigation = () => {
    return (  
        <>
         <nav className="photoNav">
                <ul>
                    <li>
                        <Link to="Dog">
                            <img src={Ozeki} alt="link to dogs pictures" style={{ width: '200px' }}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="Cat">
                            <img src={cat} alt="link to cats pictures" style={{ width: '200px' }} ></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="Fox">
                            <img src={fox} alt="link to foxes pictures" style={{ width: '200px' }}></img>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
 
export default Navigation;