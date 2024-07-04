export default function EducationForm() {
  return (
    <>
      <div className='schoolName'>
        <label htmlFor='schoolName'>Full name</label>
        <input type='text' placeholder='ESSTHS ...' id='schoolName' />
      </div>
      <div className='degree'>
        <label htmlFor='degree'>Degree/Field of Study</label>
        <input type='text' placeholder='CS' id='degree' />
      </div>
      <div className="startDate">
        <label htmlFor="startDate">Start date</label>
        <input type="date" id="startDate"/>
      </div>
      <div className="endDate">
        <label htmlFor="endDate">End date</label>
        <input type="date" id="endDate"/>
      </div>
    </>
  );
}
