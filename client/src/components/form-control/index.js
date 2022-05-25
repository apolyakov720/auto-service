import React from 'react';
import CSSUtils from "@utils/css";

const FormControl = ({ label, state, active, children }) => {
  return (
    <div className={CSSUtils.mergeModifiers('form-control', { active: active })}>
      {label && <div className="form-control__label">{label}</div>}
      {children}
      {state && <div className="form-control__state">{state}</div>}
    </div>
  );
};

export default FormControl;