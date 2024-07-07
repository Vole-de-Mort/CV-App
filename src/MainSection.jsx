import './styles/MainSection.css';
import im1 from './assets/email.png';
import im2 from './assets/phone.png';
import im3 from './assets/localisation.png';
import RenderCvEducationData from './components/RenderCvEducationData';
import RenderCvExperianceData from './components/RenderCvExperianceData';
export default function MainSection(props) {
  return (
    <div className='main'>
      <div className='personalInfoBox'>
        <div className='fullName'>{props.sharedData.personalData[0].name}</div>
        <div className='personalData'>
          <div className='email'>
            <div className='text'>{props.sharedData.personalData[0].email}</div>
            <img src={im1} alt='email icone' className='headerIcone' />
          </div>
          <div className='phoneNumber'>
            <div className='text'>
              {props.sharedData.personalData[0].phoneNumber}
            </div>
            <img src={im2} alt='phone number icone' className='headerIcone' />
          </div>
          <div className='adresse'>
            <div className='text'>
              {props.sharedData.personalData[0].adresse}
            </div>
            <img
              src={im3}
              alt='adresse et localisation icone'
              className='headerIcone'
            />
          </div>
        </div>
      </div>
      <div className='educationAndExperiance'>
        <div className='educationInfo'>
          <div className="titre"><h2>Education</h2></div>
          <div className='line-break'></div>
          {/*map throw educationData */}
          <RenderCvEducationData
            education={props.sharedData.educationData} // liste
          />
        </div>
        <div className='experianceInfo'>
          <div className="titre"><h2>Experiance</h2></div>
          <div className='line-break'></div>
          {/* map throw experianceData */}
          <RenderCvExperianceData
            experiance={props.sharedData.experianceData} // liste
          />
        </div>
      </div>
    </div>
  );
}
