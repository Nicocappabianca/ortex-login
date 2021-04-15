import React, { FC, useState } from 'react';
import { Layout, LoginForm, BackgroundVideo, ResetPasswordForm } from '@/components';

const Home: FC = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
