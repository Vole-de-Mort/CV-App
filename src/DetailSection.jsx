import GenreBox from './components/GenreBox';
import im1 from './assets/info.png';
import im2 from './assets/education.png';
import im3 from './assets/experiance.png';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import EducationForm from './components/EducationForm';
import ExperianceForm from './components/ExperianceForm';

export default function DetailSection({ setSharedData }) {
  return (
    <div className='detail'>
      <GenreBox
        text='Personal details'
        srcIcone={im1}
        info='Personal details'
        index='1'
        formContent={<PersonalDetailsForm />}
        setSharedData={setSharedData}
      />
      <GenreBox
        text='Education'
        srcIcone={im2}
        info='education'
        index='2'
        formContent={<EducationForm />}
        setSharedData={setSharedData}
      />
      <GenreBox
        text='Experiance'
        srcIcone={im3}
        info='experiance'
        index='3'
        formContent={<ExperianceForm />}
        setSharedData={setSharedData}
      />
    </div>
  );
}
