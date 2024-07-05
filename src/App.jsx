import { useState } from 'react';

import './styles/App.css';
import DetailSection from './DetailSection';
import MainSection from './MainSection';
import Header from './Header';

function App() {
  // const [sharedData, setSharedData] = useState('initial data');
  // prototype for the predined data as an object
  const initialData = {
    // the personal data must only contain one element
    personalData: {
      name: 'Ahmed miled',
      email: 'ml967799@gmail.com',
      phoneNumber: '11 222 333',
    }, // the education data is a list that containes the education achivment's
    educationData : [
      { // it could need an id not sure yet !
        schooldName : 'essths',
        degree:"Computer Science",
        startDate : '11-11-1111',
        endDate : '22-22-2222',        
      },
    ], // the education data is a list that containes the education achivment's
    experianceData : [
      { // it could need an id not sure yet !
        companyName : 'ETC',
        position : 'CEO',
        location : 'Kaser hlell',
        description : 'not anything specifically',
        start : '33-33-333',
        end : '44-44-444',
      },
    ]
  };
  const [sharedData, setSharedData] = useState(initialData);
  return (
    <>
      <Header />
      <div className='container'>
        {/*
          in the thispart i should give a prdefined variable for storing data
          even to add it or to remove or edit it
          the main section should render it 
        */}
        <DetailSection setSharedData={setSharedData} sharedData={sharedData} />
        <MainSection sharedData={sharedData} />
      </div>
    </>
  );
}

export default App;
