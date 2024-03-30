// DoctorDetails.js
import React from 'react';
//@ts-ignore
const DoctorDetails = ({ doctor }) => {
  return (
    <div className='flex flex-col flex-grow'>
    <div className="doctor-details border-slate shadow-lg rounded-2xl border-2  p-3 m-10 w-96 flex flex-col items-center justify-center">
      <h2>{doctor.tags.name ? doctor.tags.name : 'Unknown Name'}</h2>
      <p>Location: {doctor?.lat?.toFixed(4) ?? 'Unknown'}, {doctor?.lon?.toFixed(4) ?? 'Unknown'}</p>
      {Object.entries(doctor.tags).map(([key, value], idx) => (
//@ts-ignore

        key !== "name" && <p key={idx}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</p>
      ))}
      </div>
      
    </div>
  );
};

export default DoctorDetails;
