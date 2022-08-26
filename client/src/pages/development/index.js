import React from 'react';

import DatePicker from '@components/shared/date-picker';
import Select from '@components/shared/select';
import Calendar from '@components/shared/calendar';
import SearchBar from '@components/shared/search-bar';
import Input from '@components/shared/input';
import Overlay from '@components/shared/overlay';

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
        <Calendar
          original="22.06.1994"
          // onSelect={(value) => console.log(value)}
          format="dd.MM.yyyy"
        />
        <br />
        <br />
        <SearchBar />
        <br />
        <br />
        <Input onChange={(val) => console.log('new_val: ', val)} mask="phone" />
        <br />
        <br />
        <DatePicker required label="Выберите дату" />
      </div>
    </>
  );
};

export default DevelopmentPage;
