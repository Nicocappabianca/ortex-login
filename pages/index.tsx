import React, { FC } from 'react';
import { Layout, LoginForm, BackgroundVideo } from '@/components';

const Home: FC = () => {
  return (
    <Layout>
      <BackgroundVideo />
      <LoginForm />
    </Layout>
  );
};

export default Home;
