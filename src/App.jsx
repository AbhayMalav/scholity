import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Idea from './components/Idea';
import Researches from './components/Researches';
import AboutUs from './components/AboutUs';
import OurFuture from './components/OurFuture';
import ContactUs from './components/ContactUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Default page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Idea />;
      case 'Idea':
        return <Researches />;
      case 'AboutUs':
        return <AboutUs />;
      case 'OurFuture':
        return <OurFuture />;
      case 'ContactUs':
        return <ContactUs />;
      
      default:
        return <Idea />;
    }
  };

  return (
    <>
      <Navbar onPageChange={handlePageChange} />
      {renderContent()}
    </>
  );
}

export default App;
