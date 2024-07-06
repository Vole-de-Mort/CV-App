import { v4 as uuidv4 } from 'uuid';
export default function RenderCvExperianceData({ experiance }) {
  return (
    <>
      {experiance.map((company) => (
        <div key={company.id} className='experianceCard'>
          <div className='show-card'>
            <div key={uuidv4()} className='bold'>
              {company.companyName}
            </div>
            <div key={uuidv4()}>
              {company.start} / {company.end}
            </div>
          </div>
          <div className='show-card'>
            <div key={uuidv4()}>{company.position}</div>
            <div key={uuidv4()}>{company.location}</div>
          </div>
          <div className='sub-show-card' key={uuidv4()}>
            {company.description}
          </div>
          <div className='line-break'></div>
        </div>
      ))}
    </>
  );
}
