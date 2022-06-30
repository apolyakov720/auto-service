import React from 'react';

import { CSSConstants } from '@constants';
import Icon from '@components/shared/icon';
import Button from '@components/shared/button';

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
    <Button caption="Primary" theme={CSSConstants.THEMES.PRIMARY} />
    <br />
    <br />
    <Button caption="Secondary" theme={CSSConstants.THEMES.SECONDARY} />
    <br />
    <br />
    <Button caption="Info" theme={CSSConstants.THEMES.INFO} />
    <br />
    <br />
    <Button caption="Warning" theme={CSSConstants.THEMES.WARNING} />
    <br />
    <br />
    <Button caption="Error" theme={CSSConstants.THEMES.ERROR} />
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
