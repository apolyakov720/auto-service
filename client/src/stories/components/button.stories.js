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

export const Sizeable = () => (
  <>
    <Button caption="Size S" theme={CSSConstants.theme.PRIMARY} size={CSSConstants.size.S} />
    <br />
    <br />
    <Button caption="Size M (default)" theme={CSSConstants.theme.PRIMARY} />
    <br />
    <br />
    <Button caption="Size L" theme={CSSConstants.theme.PRIMARY} size={CSSConstants.size.L} />
    <br />
    <br />
    <Button caption="Size XL" theme={CSSConstants.theme.PRIMARY} size={CSSConstants.size.XL} />
    <br />
    <br />
    <Button caption="Size XXL" theme={CSSConstants.theme.PRIMARY} size={CSSConstants.size.XXL} />
  </>
);
