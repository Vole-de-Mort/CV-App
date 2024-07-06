import { v4 as uuidv4 } from 'uuid';
export default function RenderCvExperianceData({ experiance }) {
  return (
    <>
      {experiance.map((company) => (
        <div key={company.id}>
          <div key={uuidv4()}>{company.companyName}</div>
          <div key={uuidv4()}>{company.position}</div>
          <div key={uuidv4()}>{company.location}</div>
          <div key={uuidv4()}>{company.description}</div>
          <div key={uuidv4()}>
            {company.start} - {company.end}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
