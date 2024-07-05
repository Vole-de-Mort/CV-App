export default function MainSection(props) {
  return (
    <div className='main'>
      <p>personal info</p>
      {props.sharedData.name}
      {props.sharedData.email}
      {props.sharedData.phoneNumber}
      <p>edu info </p>
      {props.sharedData.schoolName}
      {props.sharedData.degree}
      {props.sharedData.startDate}
      {props.sharedData.endDate}
      <p>experiance info </p>
      {props.sharedData.companyName}
      {props.sharedData.position}
      {props.sharedData.location}
      {props.sharedData.description}
      {props.sharedData.start}
      {props.sharedData.end}
    </div>
  );
}
