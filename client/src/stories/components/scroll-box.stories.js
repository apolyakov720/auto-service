import React from 'react';

import ScrollBox from '@components/composite/suspense/scroll-box';

export default {
  title: 'Components/ScrollBox',
  component: ScrollBox,
};

export const Basic = (args) => (
  <div style={{ width: 300, fontSize: '20px' }}>
    <ScrollBox {...args}>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, fugit.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quaerat.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, praesentium!</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, maiores?</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quo.</div>
    </ScrollBox>
  </div>
);
