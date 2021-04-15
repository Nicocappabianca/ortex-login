import React, { FC, useState } from 'react';
import { FloatingLabel, Button } from '@/components';
import Fade from 'react-reveal/Fade';
import SVG from 'react-inlinesvg';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState<string | null>(null);

  return (
    <Fade top>
      <form className="login-form">
        <SVG className="login-form__logo" src="/icons/logo.svg" />
        <div className="login-form__inputs">
          <FloatingLabel
            type="email"
            placeholder="email"
            errorMessage="Must enter a valid email"
            hasError={emailError}
            setError={setEmailError}
            // eslint-disable-next-line
            pattern={/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z\-])+\.)+([a-zA-Z0-9]{2,4})+$/}
            setValue={setEmail}
            value={email}
          />
          <FloatingLabel
            type="password"
            placeholder="password"
            className="password-input"
            setValue={setPassword}
            value={password}
          />
        </div>

        <Button className="login-form__button" label={`login`} />

        <p className="login-form__reset-password link">Forgot your password?</p>
        <a className="link" href="mailto:support@ortex.com">
          Contact us - support@ortex.com
        </a>
      </form>

      <style jsx>{`
        .login-form {
          position: fixed;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          margin: auto;
          padding-top: 30px;

          display: flex;
          flex-direction: column;
          align-items: center;

          background: rgba(000, 000, 000, 0.7);
          width: 500px;
          max-width: 95%;
          height: 500px;
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.5);

          :global(&__logo) {
            width: 100px;
          }

          &__inputs {
            padding-top: 60px;

            :global(.password-input) {
              margin-top: 60px;
            }
          }

          :global(&__button) {
            margin-top: 60px;
          }

          .link {
            font-size: 14px;
            cursor: pointer;

            @media (hover: hover) {
              &:hover {
                text-decoration: underline;
              }
            }
          }

          &__reset-password {
            padding: 20px 0 10px 0;
          }
        }
      `}</style>
    </Fade>
  );
};

export default LoginForm;
