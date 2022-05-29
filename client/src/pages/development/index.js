import React, { useState } from 'react';

import { Badge, CountBadge } from '@components/badge';
import Alert from '@components/alert';
import Tooltip from '@components/tooltip';
import Input from '@components/input';
import Icon from '@components/icon';
import SearchBar from '@components/search-bar';
import Toggle from '@components/toggle';

const DevelopmentPage = () => {
  const [themeInput, setThemeInput] = useState('');

  return (
    <>
      <div style={{ display: 'flex', marginBottom: 25, flexDirection: 'column' }}>
        <Toggle caption="Включить переводы" />
      </div>
      <div style={{ display: 'flex', marginBottom: 25, flexDirection: 'column' }}>
        <SearchBar />
        <br />
        <Input
          extra={<Icon source={Icon.sources.base.person} />}
          theme={themeInput}
          placeholder="Enter your first name"
          onFocus={() => setThemeInput('active')}
          onBlur={() => setThemeInput('')}
        />
      </div>
      <div style={{ display: 'flex', marginBottom: 25, justifyContent: 'space-around' }}>
        <Tooltip content="Hello world">
          <Badge content="Click me!" squared />
        </Tooltip>
        <Tooltip content="Это счетчик" position="bottom">
          <CountBadge />
        </Tooltip>
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
        <CountBadge count={100} limit={2} />
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
