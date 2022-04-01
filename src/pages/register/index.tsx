import React, { FC } from 'react';
import AuthContainer from '../../shared/ui/authContainer';
import Form from '../../shared/ui/form';

import { useAppDispatch } from '../../redux/hooks';
import { loginThunk } from '../../redux/thunks/auth';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const test = () => {
    dispatch(loginThunk());
  };
  return (
    <AuthContainer>
      <Form>
        <input type="text" />
        <button onClick={test}>отправить</button>
      </Form>
    </AuthContainer>
  );
};

export default Register;
