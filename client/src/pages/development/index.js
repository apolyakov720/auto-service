import React from "react";

import Input from '@components/input';
import Icon from '@components/icon';
import Select from "@components/select";
import Loader from '@components/loader';
import Badge from '@components/badge';

const DevelopmentPage = () => {
  return (
    <>
      <Badge text="pending" state="pending" />
      <Badge text="cancelled" state="cancelled" />
      <Badge text="completed" state="completed" />
    </>
  );
};

export default DevelopmentPage;