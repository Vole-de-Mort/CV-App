import { v4 as uuidv4 } from 'uuid';
export default function RenderCvEducationData({ education }) {
  return (
    <>
      {education.map((ecole) => (
        <div key={ecole.id} className='educationCard'>
          <div className='show-card'>
            <div key={uuidv4()} className='bold'>
              {ecole.schoolName}
            </div>
            <div key={uuidv4()}>
              {ecole.startDate} / {ecole.endDate}
            </div>
          </div>
          <div key={uuidv4()} className='sub-show-card'>
            {ecole.degree}
          </div>

          <div className='line-break'></div>
        </div>
      ))}
    </>
  );
}
