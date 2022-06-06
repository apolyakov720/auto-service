import React from 'react';

import Pagination from '@components/pagination';

const DevelopmentPage = () => {
  return (
    <>
      <div>
        <Pagination quantity={50} size={-3} />
      </div>
    </>
  );
};

export default DevelopmentPage;
