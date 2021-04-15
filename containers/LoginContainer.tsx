import React, { FC, useState } from 'react';
import { AppHead, LoginForm, BackgroundVideo, ResetPasswordForm } from '@/components';

const LoginContainer: FC = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <section>
      <AppHead title={`${showResetPassword ? 'Reset Password' : 'Login'}`} />
      <BackgroundVideo />
      {showResetPassword ? (
        <ResetPasswordForm
          className="over-background"
          backToLogin={() => setShowResetPassword(false)}
        />
      ) : (
        <LoginForm className="over-background" resetPassword={() => setShowResetPassword(true)} />
      )}
      <style jsx>{`
        :global(.over-background) {
          position: fixed;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          margin: auto;
        }
      `}</style>
    </section>
  );
};

export default LoginContainer;
