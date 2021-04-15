import React, { FC, useState, FormEvent } from 'react';
import { FloatingLabel, Button } from '@/components';
import Fade from 'react-reveal/Fade';
import SVG from 'react-inlinesvg';
import axios from 'axios';

type LoginFormProps = {
  resetPassword: () => void;
  className?: string;
};

const LoginForm: FC<LoginFormProps> = ({ resetPassword, className }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState<string | null>(null);

  const [buttonText, setButtonText] = useState('Login');
  const [processingLogin, setProcessingLogin] = useState(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      setProcessingLogin(true);
      axios
        .post('/api/login', { email: email, password: password })
        .then(() => {
          alert('logged');
        })
        .catch(() => {
          setButtonText('¡Error!');
        });
    }

    setEmail(null);
    setPassword(null);
    setProcessingLogin(false);

    setTimeout(() => {
      setButtonText('Login');
    }, 3000);
  };

  return (
    <Fade top>
      <form
        className={`login-form ${className ? className : ''}`}
        method="post"
        onSubmit={submitForm}>
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

        <Button
          className="login-form__button"
          label={buttonText}
          disabled={emailError || !email || !password || processingLogin}
        />

        <p className="login-form__reset-password link" onClick={resetPassword} aria-hidden="true">
          Forgot your password?
        </p>
        <a className="link" href="mailto:support@ortex.com">
          Contact us - support@ortex.com
        </a>
      </form>

      <style jsx>{`
        .login-form {
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
            padding: 25px 0 10px 0;
          }
        }
      `}</style>
    </Fade>
  );
};

export default LoginForm;
