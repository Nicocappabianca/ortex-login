import React, { FC } from 'react';
import Fade from 'react-reveal/Fade';
import SVG from 'react-inlinesvg';

const LoginForm: FC = () => {
  return (
    <Fade top>
      <div className="login-form">
        <SVG className="login-form__logo" src="/icons/logo.svg" />

        <style jsx>{`
          .login-form {
            position: fixed;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            margin: auto;
            padding-top: 20px;

            display: flex;
            flex-direction: column;
            align-items: center;

            background: rgba(000, 000, 000, 0.9);
            width: 500px;
            height: 500px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.5);

            :global(&__logo) {
              width: 100px;
            }
          }
        `}</style>
      </div>
    </Fade>
  );
};

export default LoginForm;
