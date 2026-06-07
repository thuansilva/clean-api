'use client';
import React from 'react';

import {
  Footer,
  InputBase as Input,
  LoginHeader,
  FormStatusBase,
} from '~/presentation/components';

import Styles from './login-styles.module.scss';

const Login: React.FC = () => {
  return (
    <div className={Styles.loginWrap}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        {/* <Link data-testid="signup-link" to="/signup" className={Styles.link}>
          Criar conta
        </Link> */}
        <FormStatusBase state={false} />
      </form>
      <Footer />
    </div>
  );
};
export default Login;
