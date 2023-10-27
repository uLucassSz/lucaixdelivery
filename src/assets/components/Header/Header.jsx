import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
        <span className='logo'>NIKE, INC.</span>
        <div className="search-box">
            <i className="bx bx-search"></i>
            <input type="text" maxLength={6} placeholder='Digite o código do pedido' />
        </div>
    </header>
  );
}

export default Header;