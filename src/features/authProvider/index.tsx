import React, { useEffect, FC, useState } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { setRefreshToken } from '../../redux/slices/auth';

const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      // здесь должен быть axios запрос на получение refresh token с дальнейшим прокидыванием данных в redux
      // так же нужно засетать в локал стораж дынные по токенам
      dispatch(setRefreshToken());
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isLoading ? <>loading</> : <>{children}</>;
};

export default AuthProvider;
