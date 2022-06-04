import React from 'react';

import Pagination from '@components/pagination';

const DevelopmentPage = () => {
  return (
    <>
      <div>
        <Pagination size={5} quantity={40} /* onChangePage={} */ />
      </div>
    </>
  );
};

export default DevelopmentPage;
