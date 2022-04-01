import React, { FC } from 'react';

import './style.scss';

const Form: FC = ({ children }) => {
  return <div className="form">{children}</div>;
};

export default Form;
