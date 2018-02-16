import * as React from 'react';
import Header from './components/header';
import Footer from './components/footer';

export default () => {
  return (
    <div>
      <Header/>
      <h1 onClick={() => alert('hello world')}>Click</h1>
      <Footer/>
    </div>
  );
};
