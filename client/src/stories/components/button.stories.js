import React from 'react';

import { CSSConstants } from '@constants';
import Icon from '@components/icon';
import Button from '@components/button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  caption: 'Default',
  size: 'M',
  noStroke: false,
  circled: false,
  extra: null,
};

export const Theme = () => (
  <>
    <Button caption="Primary" theme={CSSConstants.theme.PRIMARY} />
    <br />
    <br />
    <Button caption="Secondary" theme={CSSConstants.theme.SECONDARY} />
    <br />
    <br />
    <Button caption="Info" theme={CSSConstants.theme.INFO} />
    <br />
    <br />
    <Button caption="Warning" theme={CSSConstants.theme.WARNING} />
    <br />
    <br />
    <Button caption="Error" theme={CSSConstants.theme.ERROR} />
  </>
);

export const Extra = () => (
  <>
    <Button extra={<Icon source={Icon.sources.base.cross} />} />
    <br />
    <br />
    <Button circled extra={<Icon source={Icon.sources.base.person} />} />
    <br />
    <br />
    <Button noStroke extra={<Icon source={Icon.sources.base.key} />} />
  </>
);
