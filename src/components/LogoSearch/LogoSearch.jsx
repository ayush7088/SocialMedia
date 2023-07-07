import React from 'react';
import './LogoSearch.css';
import {UilSearch} from '@iconscout/react-unicons';
import Logo from '../../img/logo2.png';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        {/* logoSearch is here. */}
        <img className='logoImg' src={Logo} alt="" />
        <div className="Search">
            <input type="text" placeholder='#explore here please!!'/>
            <div className="s-icon">
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch