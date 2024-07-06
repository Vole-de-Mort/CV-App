import './styles/MainSection.css';
import im1 from './assets/email.png';
import im2 from './assets/phone.png';
import im3 from './assets/localisation.png';

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
      {/* 
        namlou un composent pour generer les block SI'il EXSISTE 
      */}
      <div className='educationInfo'>
        <p>edu info </p>
        {/*lazem map throw educationData */}
        {props.sharedData.educationData[0].schoolName} <br />
        {props.sharedData.educationData[0].degree} <br />
        {props.sharedData.educationData[0].startDate} <br />
        {props.sharedData.educationData[0].endDate}
      </div>
      <div className='experianceInfo'>
        <p>experiance info </p>
        {/*lazem map throw experianceData */}
        {props.sharedData.experianceData[0].companyName} <br />
        {props.sharedData.experianceData[0].position} <br />
        {props.sharedData.experianceData[0].location} <br />
        {props.sharedData.experianceData[0].description} <br />
        {props.sharedData.experianceData[0].start} <br />
        {props.sharedData.experianceData[0].end}
      </div>
    </div>
  );
}
