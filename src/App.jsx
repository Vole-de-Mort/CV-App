import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';
import DetailSection from './DetailSection';
import MainSection from './MainSection';
import Header from './Header';

function App() {
  const initialData = {
    // the personal data must only contain one element
    personalData: [
      {
        name: 'Ahmed miled',
        email: 'this.is.not.real@gmail.com',
        phoneNumber: '+216 99 999 999',
        adresse: '123 Random Road',
      },
    ], // the education data is a list that containes the education achivment's
    educationData: [
      {
        schoolName: 'Stanford University',
        degree: 'Ph.D. in Machine Learning',
        startDate: '11-11-2005',
        endDate: '22-22-2008',
        id: uuidv4(),
      },
      {
        schoolName: 'Harvard University',
        degree: 'Master of Science in Artificial Intelligence',
        startDate: '11-11-2003',
        endDate: '22-22-2005',
        id: uuidv4(),
      },
      {
        schoolName: 'ESSTHS',
        degree: 'Bachelor of Science in Computer Science',
        startDate: '11-11-2000',
        endDate: '22-22-2003',
        id: uuidv4(),
      },
    ],
    experianceData: [
      {
        companyName: 'Google',
        position: 'Software Engineer',
        location: 'Mountain View, CA',
        description:
          'Worked on the development of large-scale machine learning algorithms and improved search engine capabilities.',
        start: '33-33-2019',
        end: '44-44-2024',
        id: uuidv4(),
      },
      {
        companyName: 'Facebook',
        position: 'Data Scientist',
        location: 'Menlo Park, CA',
        description:
          'Analyzed user data to enhance ad targeting algorithms and improve user engagement metrics.',
        start: '33-33-2015',
        end: '44-44-2018',
        id: uuidv4(),
      },
      {
        companyName: 'OpenAI',
        position: 'Senior Research Scientist',
        location: 'San Francisco, CA',
        description: 'Senior Research Scientist',
        start: '33-33-2011',
        end: '44-44-2015',
        id: uuidv4(),
      },
      {
        companyName: 'Microsoft',
        position: 'Junior Software Developer',
        location: 'Redmond, WA',
        description:
          'Assisted in the development of cloud computing services and worked on improving the performance of Microsoft Azure.',
        start: '33-33-2009',
        end: '44-44-2011',
        id: uuidv4(),
      },
    ],
  };
  const [sharedData, setSharedData] = useState(initialData);
  return (
    <>
      <Header />
      <div className='container'>
        <DetailSection setSharedData={setSharedData} sharedData={sharedData} />
        <MainSection sharedData={sharedData} />
      </div>
    </>
  );
}

export default App;
