import React from 'react';
import { Form } from 'react-final-form';

import Button from '@components/shared/button';
import { CSSThemes } from '@utils/css';

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
      // Передаем функцию проверки полей каждый раз создавая новую
      <Form
        initialValues={values}
        validate={(values) => this.validate(values)}
        onSubmit={this.handleSubmit}>
        {({ handleSubmit, valid, submitting }) => {
          const nextButtonText = isLastPage ? 'Подтвердить' : 'Далее';
          const nextButtonTheme = valid ? CSSThemes.primary : CSSThemes.disabled;

          return (
            <form className="form" onSubmit={handleSubmit}>
              {activePage}
              <div className="controls">
                {page > 0 && (
                  <div className="controls__secondary">
                    <Button
                      type="button"
                      caption="Назад"
                      theme={CSSThemes.secondary}
                      onClick={this.previous}
                    />
                  </div>
                )}
                <div className="controls__primary">
                  <Button
                    type="submit"
                    caption={nextButtonText}
                    theme={nextButtonTheme}
                    disabled={submitting}
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
