import React, { FC, useState, FormEvent } from 'react';
import { FloatingLabel, Button } from '@/components';
import Fade from 'react-reveal/Fade';
import SVG from 'react-inlinesvg';
import axios from 'axios';

type ResetPasswordFormProps = {
  className?: string;
  backToLogin: () => void;
};

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ className, backToLogin }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [emailError, setEmailError] = useState(false);

  const [buttonText, setButtonText] = useState('Submit');
  const [processingSubmit, setProcessingSubmit] = useState(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email) {
      setProcessingSubmit(true);
      axios
        .post('/api/reset_password', { email: email })
        .then(() => {
          alert('email sent!');
        })
        .catch(() => {
          setButtonText('¡Error!');
        });
    }

    setEmail(null);
    setProcessingSubmit(false);

    setTimeout(() => {
      setButtonText('Submit');
    }, 3000);
  };

  return (
    <Fade bottom>
      <form
        className={`reset-password-form ${className ? className : ''}`}
        method="post"
        onSubmit={submitForm}>
        <SVG className="reset-password-form__logo" src="/icons/logo.svg" />
        <h2 className="reset-password-form__title">Reset Password</h2>
        <p className="reset-password-form__subtitle">Enter your email to get reset instructions.</p>
        <div className="reset-password-form__input">
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
        </div>

        <Button
          className="reset-password-form__button"
          label={buttonText}
          disabled={emailError || !email || processingSubmit}
        />

        <p className="reset-password-form__back" onClick={backToLogin} aria-hidden="true">
          go back to login
        </p>

        <p className="reset-password-form__link">
          If you need any assistance <br />
          please contact us on <a href="mailto:support@ortex.com">support@ortex.com</a>
        </p>
      </form>

      <style jsx>{`
        .reset-password-form {
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

          &__title {
            margin: 0px;
            padding-top: 20px;
          }

          &__subtitle {
            text-align: center;
            padding-top: 10px;
            font-size: 14px;
          }

          :global(&__logo) {
            width: 100px;
          }

          &__input {
            padding-top: 40px;
          }

          :global(&__button) {
            margin-top: 60px;
          }

          &__link {
            font-size: 14px;
            text-align: center;

            a {
              @media (hover: hover) {
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }

          &__back {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
            padding: 25px 0px 20px 0;

            @media (hover: hover) {
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      `}</style>
    </Fade>
  );
};

export default ResetPasswordForm;
