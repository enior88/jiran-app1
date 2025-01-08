import React from 'react';
    
    function Testimonials() {
      return (
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Testimonials</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                <p style={{ fontStyle: 'italic', color: '#555' }}>"I love using JIRAN! It's a great way to find unique items and support my community."</p>
                <p style={{ fontWeight: 'bold' }}>- Jane Doe</p>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                <p style={{ fontStyle: 'italic', color: '#555' }}>"Selling my old stuff on JIRAN was so easy, and I'm happy it's going to a good home."</p>
                <p style={{ fontWeight: 'bold' }}>- John Smith</p>
              </div>
            </div>
          </div>
        </section>
      );
    }
    
    export default Testimonials;
