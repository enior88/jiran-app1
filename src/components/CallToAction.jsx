import React from 'react';
    
    function CallToAction() {
      return (
        <section style={{ padding: '3rem 0', backgroundColor: '#4CAF50', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1rem' }}>Ready to Join JIRAN?</h2>
            <p style={{ marginBottom: '2rem' }}>Start buying and selling used items today!</p>
            <button style={{ padding: '1rem 2rem', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up Now</button>
          </div>
        </section>
      );
    }
    
    export default CallToAction;
