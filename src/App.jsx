import React from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';

/**
 * Create App parent component.
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
