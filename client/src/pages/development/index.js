import React from 'react';

import { Badge, CountBadge } from '@components/badge';

const DevelopmentPage = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
        <CountBadge count={100} limit={2} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
        <Badge content="see more" squared />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
        <Badge content="pending" />
        <Badge content="cancelled" state="cancelled" />
        <Badge content="completed" state="completed" />
      </div>
    </>
  );
};

export default DevelopmentPage;
