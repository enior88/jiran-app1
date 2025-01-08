import React from 'react';
    
    function Header() {
      return (
        <header style={{ backgroundColor: '#f0f0f0', padding: '1rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>JIRAN</h1>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '1rem' }}>
                <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Browse</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Sell</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Login</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }
    
    export default Header;
