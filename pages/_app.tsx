import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/main.scss';

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
