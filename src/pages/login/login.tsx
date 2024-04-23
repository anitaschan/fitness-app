import { InputField } from '../../components';
import { Card } from '../../components/card/card';

import './login.css';

export const LoginPage = () => {
  return (
    <section className="login-container">
      <div className="login-logo">Some logo here</div>
      <div className="login-input-container">
        <InputField labelName="username" />
        <InputField labelName="password" />
        <a href={'/home'}>click me</a>
        <Card />
      </div>
    </section>
  );
};
