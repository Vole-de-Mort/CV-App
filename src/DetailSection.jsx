import GenreBox from './components/GenreBox';

import './styles/DetailSection.css';
import im1 from './assets/info.png';
import im2 from './assets/education.png';
import im3 from './assets/experiance.png';

import PersonalDetailsForm from './components/PersonalDetailsForm';
import EducationForm from './components/EducationForm';
import ExperianceForm from './components/ExperianceForm';
/* 
cette section doit genere ces composont : 
  information
  education
  experiance
  competance
  langage
  Centre d'interée
*/

//lazem component pour genere un box avec un text et un logo specifie

export default function DetailSection() {
  return (
    <div className='detail'>
      <GenreBox
        text='Personal details'
        srcIcone={im1}
        info='Personal details'
        index='1'
        formContent={<PersonalDetailsForm />} // 3tenah el form 7athra
      />
      <GenreBox
        text='Education'
        srcIcone={im2}
        info='education'
        index='2'
        formContent={<EducationForm />}
      />
      <GenreBox
        text='Experiance'
        srcIcone={im3}
        info='experiance'
        index='3'
        formContent={<ExperianceForm />}
      />
    </div>
  );
}
