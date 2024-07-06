export default function MainSection(props) {
  return (
    <div className='main'>
      {console.log(props)}
      <div className='personalInfoBox'>
        <p>personal info</p>
        {props.sharedData.personalData[0].name} <br />
        {props.sharedData.personalData[0].email} <br />
        {props.sharedData.personalData[0].phoneNumber}
      </div>
      <div className='educationInfo'>
        <p>edu info </p>
        {props.sharedData.educationData[0].schoolName} <br />
        {props.sharedData.educationData[0].degree} <br />
        {props.sharedData.educationData[0].startDate} <br />
        {props.sharedData.educationData[0].endDate}
      </div>
      <div className='experianceInfo'>
        <p>experiance info </p>
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
