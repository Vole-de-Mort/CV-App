
import './styles/MainSection.css';
import im1 from './assets/email.png';
import im2 from './assets/phone.png';
import im3 from './assets/localisation.png';
import RenderCvEducationData from './components/RenderCvEducationData';
import RenderCvExperianceData from './components/RenderCvExperianceData'
export default function MainSection(props) {
  console.log(props);
  return (
    <div className='main'>
      <div className='personalInfoBox'>
        <div className='fullName'>{props.sharedData.personalData[0].name}</div>
        <div className='personalData'>
          <div className='email'>
            <div className='text'>{props.sharedData.personalData[0].email}</div>
            <img src={im1} alt='email icone' />
          </div>
          <div className='phoneNumber'>
            <div className='text'>
              {props.sharedData.personalData[0].phoneNumber}
            </div>
            <img src={im2} alt='phone number icone' />
          </div>
          <div className='adresse'>
            <div className='text'>
              {props.sharedData.personalData[0].adresse}
            </div>
            <img src={im3} alt='adresse et localisation icone' />
          </div>
        </div>
      </div>
      <div className='educationInfo'>
        {/*map throw educationData */}
        <RenderCvEducationData 
          education={props.sharedData.educationData} // liste
        />
      </div>
      <div className='experianceInfo'>
        {/* map throw experianceData */}
        <RenderCvExperianceData 
          experiance={props.sharedData.experianceData} // liste
        />
      </div>
    </div>
  );
}
