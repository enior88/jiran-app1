import React from 'react';
    
    function FeaturedItems() {
      return (
        <section style={{ padding: '3rem 0', backgroundColor: '#f9f9f9' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Items</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
                <img src="https://via.placeholder.com/150" alt="Item 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                <h3>Item 1</h3>
                <p>$20</p>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
                <img src="https://via.placeholder.com/150" alt="Item 2" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                <h3>Item 2</h3>
                <p>$30</p>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
                <img src="https://via.placeholder.com/150" alt="Item 3" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                <h3>Item 3</h3>
                <p>$25</p>
              </div>
            </div>
          </div>
        </section>
      );
    }
    
    export default FeaturedItems;
