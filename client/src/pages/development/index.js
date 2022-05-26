import React from 'react';

import { Badge, CountBadge } from '@components/badge';
import Alert from '@components/alert';
import Tooltip from '@components/tooltip';

const DevelopmentPage = () => {
  return (
    <>
      <div style={{ display: 'flex', marginBottom: 25 }}>
        <Tooltip content="Hello world" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 25,
          flexDirection: 'column',
        }}>
        <Alert content="Well done! You successfully read this important alert message" />
        <Alert
          type="secondary"
          content="Second message! You unsuccessfully read this important alert message"
        />
        <Alert
          type="warning"
          content="Third message! You unsuccessfully read this important alert message"
        />
        <Alert
          type="error"
          content="Fourth message! You unsuccessfully read this important alert message"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
        <CountBadge count={1000} limit={3} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
        <Badge content="see more" squared />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
        <Badge content="pending" />
        <Badge content="cancelled" type="error" />
        <Badge content="completed" type="secondary" />
      </div>
    </>
  );
};

export default DevelopmentPage;
