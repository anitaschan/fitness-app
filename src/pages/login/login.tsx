import { InputField } from "../../components";
import { Card } from "../../components/card/card";

import "./login.css";

export const LoginPage = () => {
  return (
    <section className="login-input-container">
      <InputField labelName="Input1" />
      <Card />
    </section>
  );
};
