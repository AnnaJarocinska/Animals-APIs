import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (  
        <>
        <nav>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link to="Dogs">Dogs</Link>
          </li>
          <li>
            <Link to="Cats">Cats</Link>
          </li>
          <li>
            <Link to="Foxes">Foxes</Link>
          </li>
        </ul>
      </nav>
        </>
    );
}
 
export default Navigation;