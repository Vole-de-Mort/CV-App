import GenreBox from './components/GenreBox';
import im1 from './assets/info.png';
import im2 from './assets/education.png';
import im3 from './assets/experiance.png';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import EducationForm from './components/EducationForm';
import ExperianceForm from './components/ExperianceForm';

export default function DetailSection(props) {
  const deleteItem = (info, id) => {
    props.setSharedData((prevData) => ({
      ...prevData,
      [info]: prevData[info].filter((item) => item.id !== id),
    }));
  };
  const handelClearClear = () => {
    props.setSharedData({
      personalData: [
        {
          name: '',
          email: '',
          phoneNumber: '',
          adresse: '',
        },
      ],
      educationData: [
        {
          schoolName: '',
          degree: '',
          startDate: '',
          endDate: '',
          id: '',
        },
      ],
      experianceData: [
        {
          companyName: '',
          position: '',
          location: '',
          description: '',
          start: '',
          end: '',
          id: '',
        },
      ],
    });
  };
  return (
    <div className='detail'>
      <div className='btns'>
        <input
          type='button'
          value='Clear example'
          id='btn1'
          onClick={handelClearClear}
        />
        <input type='button' value='Load example' id='btn2' />
      </div>
      <GenreBox
        text='Personal details'
        srcIcone={im1}
        info='personalData'
        index='1'
        formContent={<PersonalDetailsForm sharedData={props.sharedData} />}
        setSharedData={props.setSharedData}
        sharedData={props.sharedData}
      />
      <GenreBox
        text='Education'
        srcIcone={im2}
        info='educationData'
        index='2'
        formContent={<EducationForm sharedData={props.sharedData} />}
        setSharedData={props.setSharedData}
        deleteItem={deleteItem}
        sharedData={props.sharedData}
      />
      <GenreBox
        text='Experiance'
        srcIcone={im3}
        info='experianceData'
        index='3'
        formContent={<ExperianceForm sharedData={props.sharedData} />}
        setSharedData={props.setSharedData}
        deleteItem={deleteItem}
        // athi bech nab3thou bada les donner el genere box pour les affiche comme des petit box
        sharedData={props.sharedData}
      />
    </div>
  );
}
