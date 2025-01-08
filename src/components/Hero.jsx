import React from 'react';
    
    function Hero() {
      return (
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Buy and Sell Used Items in Your Community</h2>
            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>Join JIRAN and promote sustainable living by giving used items a new home.</p>
            <button style={{ padding: '1rem 2rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>
          </div>
        </section>
      );
    }
    
    export default Hero;
