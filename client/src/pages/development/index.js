import React from 'react';

import DatePicker from '@components/shared/date-picker';
import Select from '@components/shared/select';
import Calendar from '@components/shared/calendar';
import SearchBar from '@components/shared/search-bar';
import Input from '@components/shared/input';

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
          label="Choose options"
          hints={['Укажите одно или несколько свойств']}
        />
        <br />
        <br />
        <DatePicker required label="Выберите дату" />
        <br />
        <br />
        <Calendar
          originalISODate="1994-06-22"
          onSelect={(value) => console.log(value)}
          formatReturnValue="dd.MM.yyyy"
        />
        <br />
        <br />
        <SearchBar />
        <br />
        <br />
        <Input onChange={(val) => console.log('new_val: ', val)} mask="phone" />
      </div>
    </>
  );
};

export default DevelopmentPage;
