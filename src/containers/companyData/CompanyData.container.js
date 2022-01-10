import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import CompanyDetails from '../../components/companyDetails/CompanyDetails';
import './companyData.container.scss';

const data = [
  {
    id: 1,
    title: 'عنوان المكتب:',
    Icon: MdLocationOn,
    details: '31 شارع إيران الدقي، الجيزة، مصر',
  },
  {
    id: 2,
    title: 'البريد الالكتروني:',
    Icon: FaEnvelope,
    details: 'info@mahaseel.com',
  },
  {
    id: 3,
    title: 'تليفون:',
    Icon: FaPhone,
    details: '01111558999',
  },
];
function CompanyData() {
  return (
    <div className="companyData">
      <div className="companyData_heading mb-4 d-flex flex-column align-items-start">
        <h1 className="heading-1">اهلا وسهلا بك</h1>
        <p className="text-1">
          نسعد بتواصلكم دائما, برجاء تزويدنا بمعلومات الاتصال و سوف نقوم بالرد
          علي رسائلكم خلال 24 ساعة
        </p>
      </div>
      <div className="companyData_detailes vstack gap-3">
        {data.map((data) => {
          return <CompanyDetails key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
}

export default CompanyData;
