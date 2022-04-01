import React, { FC } from 'react';
import AuthContainer from '../../shared/ui/authContainer';
import Form from '../../shared/ui/form';
import { loginThunk } from '../../redux/thunks/auth';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const test = () => {
    dispatch(loginThunk());
    navigate('/');
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

export default Login;
