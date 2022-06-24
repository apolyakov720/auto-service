import React from 'react';

import Button from "@components/button";
import ScrollBox from "@components/scroll-box";
// TODO: пока оставить контекст, по итогу удалить, либо оставить
import { DropdownProvider, DropdownConsumer } from "./dropdown-context";
import { CSSConstants } from "@constants";

class Dropdown extends React.Component {
  static Header = ({ children }) => (
    <DropdownConsumer>
      {() => children && (
        <div className="dropdown__header">
          {children}
        </div>
      )}
    </DropdownConsumer>
  );

  static Main = ({ children }) => (
    <DropdownConsumer>
      {() => children && (
        <div className="dropdown__main">
          <ScrollBox>
            {children}
          </ScrollBox>
        </div>
      )}
    </DropdownConsumer>
  );

  static Footer = ({ onApply = () => null, onCancel = () => null, }) => (
    <DropdownConsumer>
      {() => (
        <div className="dropdown__footer">
          <Button caption="Отмена" onClick={onCancel} />
          <Button
            caption="Применить"
            theme={CSSConstants.theme.PRIMARY}
            onClick={onApply}
          />
        </div>
      )}
    </DropdownConsumer>
  );

  render() {
    const { children, open, ...properties } = this.props;

    if (!open) {
      return null;
    }

    return (
      <DropdownProvider value={properties}>
        <div className="dropdown">
          {children}
        </div>
      </DropdownProvider>
    );
  }
}

export default Dropdown;