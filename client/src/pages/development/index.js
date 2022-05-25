import React from "react";

import Input from '@components/input';
import Icon from '@components/icon'
import Select from "@components/select";
import Loader from '@components/loader'

const DevelopmentPage = () => {
  return (
    <>
      <div>
        <Input
          label={<Icon source={Icon.sources.base.person}/>}
          placeholder='First and last name'
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <Input
          active
          label={<Icon source={Icon.sources.base.person}/>}
          placeholder='First and last name'
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <Select />
      </div>
      <div style={{ marginTop: 10 }}>
        <Loader />
      </div>
    </>
  );
};

export default DevelopmentPage;