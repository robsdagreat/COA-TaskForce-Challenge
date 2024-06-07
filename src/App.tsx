import React from 'react';
import Gallery from './Gallery';
import './App.css'

const App: React.FC = () => {
  return (
    <div className='bg-lime-800'>
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mb-4">Interactive Photo Gallery</h1>
      <Gallery />
    </div>
    </div>
  );
};

export default App;