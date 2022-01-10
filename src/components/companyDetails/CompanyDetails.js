import React from 'react';
import './companyDetails.scss';

function CompanyDetails({ title, Icon, details }) {
  return (
    <div className="companyDetails d-flex flex-column align-items-start">
      <h2 className="heading-2 mb-2">
        {<Icon className="icon" />}
        <span>{title}</span>
      </h2>
      <p className="text-2">{details}</p>
    </div>
  );
}

export default CompanyDetails;
