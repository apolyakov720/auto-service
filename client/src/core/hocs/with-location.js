import React from 'react';
import { useLocation } from 'react-router-dom';

const withLocation = (Component) => (props) => <Component location={useLocation()} {...props} />;

export default withLocation;
