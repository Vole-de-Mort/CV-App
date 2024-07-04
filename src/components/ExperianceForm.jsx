export default function ExperianceForm() {
  return (
    <>
      <div className='cmopanyName'>
        <label htmlFor='cmopanyName'>Company Name</label>
        <input type='text' placeholder='Electrocontact Tunisie SARL- ECT1' id='cmopanyName' />
      </div>
      <div className='position'>
        <label htmlFor='position'>Position Title</label>
        <input type='text' placeholder='technicien supérieur ...' id='position' />
      </div>
      <div className='location'>
        <label htmlFor='phoneNumber'>Location</label>
        <input type='text' placeholder='Kaser hlell' id='location' />
      </div>
      <div className='startDate'>
        <label htmlFor='start'>Start date</label>
        <input type='date' id='start' />
      </div>
      <div className='endDate'>
        <label htmlFor='end'>End date</label>
        <input type='date' id='end' />
      </div>
    </>
  );
}
