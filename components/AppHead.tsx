import React, { FC } from 'react';
import Head from 'next/head';
import { AppData } from '@/lib/constants';

type AppHeadProps = {
  title?: string;
};

const AppHead: FC<AppHeadProps> = ({ title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>
      {AppData.title}
      {title ? ` | ${title}` : null}
    </title>
  </Head>
);

export default AppHead;
