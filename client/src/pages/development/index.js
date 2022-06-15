import React from 'react';

import Select from "@components/select";

const items = [
  {
    id: "1",
    title: 'Honda',
  },
  {
    id: "2",
    title: 'Ford',
  },
  {
    id: "3",
    title: 'Lada',
  },
  {
    id: "4",
    title: 'Mazda',
  },
  {
    id: "5",
    title: 'Subaru',
  },
  {
    id: "7",
    title: 'BMW',
  },
  {
    id: "8",
    title: 'Mercedes',
  },
  {
    id: "9",
    title: 'Audi',
  },
  {
    id: "10",
    title: 'Saab',
  },
];

const DevelopmentPage = () => {
  return (
    <>
      <div>
        <Select items={items} label="Марка машины" required />
      </div>
    </>
  );
};

export default DevelopmentPage;
