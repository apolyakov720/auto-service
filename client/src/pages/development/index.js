import React from 'react';

import Button from '@components/button';
import Icon from '@components/icon';

const DevelopmentPage = () => {
  return (
    <>
      <div>
        <Button />
        <br />
        <br />
        <Button caption="This button" />
        <br />
        <br />
        <Button caption="This button" extra={<Icon source={Icon.sources.base.cross} />} />
        <br />
        <br />
        <Button extra={<Icon source={Icon.sources.base.cross} />} />
        <br />
        <br />
        <Button extra={<Icon source={Icon.sources.base.cross} />} noStroke />
        <br />
        <br />
        <Button extra={<Icon source={Icon.sources.base.cross} bold />} circled size="xxl" />
      </div>
    </>
  );
};

export default DevelopmentPage;
