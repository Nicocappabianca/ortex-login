import React, { FC, useState } from 'react';
import { Layout, LoginForm, BackgroundVideo, ResetPasswordForm, AppHead } from '@/components';
// import { io } from "socket.io-client";

const Home: FC = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);

  // TODO: Connect to web socket and show data
  // const socket = io("ws://stream.tradingeconomics.com/?client=guest:guest", {
  //   reconnectionDelayMax: 10000,
  //   query: {
  //     "topic": "subscribe",
  //     "to": "EURUSD:CUR"
  //   },
  // });

  // console.log(socket);

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
