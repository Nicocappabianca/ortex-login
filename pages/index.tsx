import React, { FC, useState, useEffect } from 'react';
import { Layout, LoginForm, BackgroundVideo, ResetPasswordForm, AppHead } from '@/components';

const Home: FC = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);

  useEffect(() => {
    const socket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');
    socket.onopen = (event: any) => {
      if (event.currentTarget.readyState == 1) {
        socket.send(JSON.stringify({ topic: 'subscribe', to: 'EURUSD:CUR' }));
        socket.onmessage = (data) => console.log(data);
      }
    };
  }, []);

  return (
    <>
      <AppHead title={`${showResetPassword ? 'Reset Password' : 'Login'}`} />
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
    </>
  );
};

export default Home;
