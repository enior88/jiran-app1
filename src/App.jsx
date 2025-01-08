import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import FeaturedItems from './components/FeaturedItems';
    import Categories from './components/Categories';
    import AboutUs from './components/AboutUs';
    import Testimonials from './components/Testimonials';
    import CallToAction from './components/CallToAction';
    import Footer from './components/Footer';
    
    function App() {
      return (
        <div>
          <Header />
          <Hero />
          <FeaturedItems />
          <Categories />
          <AboutUs />
          <Testimonials />
          <CallToAction />
          <Footer />
        </div>
      );
    }
    
    export default App;
