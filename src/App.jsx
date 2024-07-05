import { useState } from 'react';

import './styles/App.css';
import DetailSection from './DetailSection';
import MainSection from './MainSection';
import Header from './Header';

function App() {
  const [sharedData, setSharedData] = useState('initial data');

  return (
    <>
      <Header />
      <div className='container'>
        <DetailSection setSharedData={setSharedData} />
        <MainSection sharedData={sharedData} />
      </div>
    </>
  );
}

export default App;
