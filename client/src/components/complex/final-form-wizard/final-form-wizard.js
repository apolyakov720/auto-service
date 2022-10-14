import React from 'react';
import { Form } from 'react-final-form';

import Button from '@components/shared/button';
import { CSSConstants } from '@constants';

class FinalFormWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  static Page = ({ children }) => children;

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children?.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[this.state.page];

    return activePage?.props?.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;

    const isLastPage = page === React.Children.count(children) - 1;

    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;

    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Form initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
        {({ handleSubmit, valid }) => {
          const nextButtonText = isLastPage ? 'Подтвердить' : 'Далее';
          const nextButtonTheme = valid
            ? CSSConstants.THEMES.PRIMARY
            : CSSConstants.THEMES.DISABLED;

          return (
            <form onSubmit={handleSubmit}>
              {activePage}
              <div className="step-buttons">
                {page > 0 && (
                  <div className="step-buttons__previous">
                    <Button
                      caption="Назад"
                      theme={CSSConstants.THEMES.SECONDARY}
                      onClick={this.previous}
                    />
                  </div>
                )}
                <div className="step-buttons__next">
                  <Button
                    type="submit"
                    caption={nextButtonText}
                    theme={nextButtonTheme}
                    disabled={!valid}
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Form>
    );
  }
}

export default FinalFormWizard;