import React, {useEffect, useRef} from 'react';
import Button from '@components/button';
import Dropdown from "@components/dropdown";

import withRef from "@/hoc-helpers/withRef";

import FormControl from "@components/form-control";

const Select = () => {
  const targetElement = useRef(null);

  const ButtonWithRef = withRef(Button);

  return (
    <FormControl>
      <div>Select</div>
    </FormControl>
  );
};

export default Select;