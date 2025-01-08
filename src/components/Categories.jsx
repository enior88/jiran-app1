import React from 'react';
    
    function Categories() {
      return (
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Categories</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
              <li style={{ backgroundColor: '#e0e0e0', padding: '1rem', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Electronics</li>
              <li style={{ backgroundColor: '#e0e0e0', padding: '1rem', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Furniture</li>
              <li style={{ backgroundColor: '#e0e0e0', padding: '1rem', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Clothing</li>
              <li style={{ backgroundColor: '#e0e0e0', padding: '1rem', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Books</li>
              <li style={{ backgroundColor: '#e0e0e0', padding: '1rem', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Home Goods</li>
            </ul>
          </div>
        </section>
      );
    }
    
    export default Categories;
