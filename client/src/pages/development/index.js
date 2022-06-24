import React from 'react';

import DatePicker from '@components/date-picker';
import Select from '@components/select';
import Calendar from "@components/calendar";

const DevelopmentPage = () => {
  return (
    <>
      <div>
        <Select
          items={[
            { id: 1, title: 'hello' },
            { id: 2, title: 'world' },
            { id: 3, title: 'hello' },
            { id: 4, title: 'hello' },
            { id: 5, title: 'hello' },
            { id: 6, title: 'hello' },
            { id: 7, title: 'hello' },
          ]}
          multiple
        />
        <br />
        <br />
        <DatePicker />
        <br />
        <br />
        <Calendar originalISODate="1994-06-22" onSelect={(value) => console.log(value)} formatReturnValue="dd.MM.yyyy" />
      </div>
    </>
  );
};

export default DevelopmentPage;
