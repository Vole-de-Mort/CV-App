import React from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function RenderCvEducationData({ education }) {
  console.log('Education Data');
  console.log(education);
  return (
    <>
      {education.map((ecole) => (
        <div key={ecole.id}>
          <div key={uuidv4()}>{ecole.schoolName}</div>
          <div key={uuidv4()}>{ecole.degree}</div>
          <div key={uuidv4()}>
            {ecole.startDate} - {ecole.endDate}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
