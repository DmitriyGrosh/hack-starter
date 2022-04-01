import React, { FC } from 'react';

import './style.scss';

const AuthContainer: FC = ({ children }) => {
  return <div className="auth-container">{children}</div>;
};

export default AuthContainer;
