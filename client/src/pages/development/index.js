import React from 'react';

import DatePicker from '@components/date-picker';
import Select from '@components/select';

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
      </div>
    </>
  );
};

export default DevelopmentPage;
