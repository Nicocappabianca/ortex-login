import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import { MediaContextProvider } from '@/lib/helpers';
import { globalStyles } from '@/lib/globalStyles';
// import { AppHead } from '@/components';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <MediaContextProvider>
      {/* <AppHead /> */}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>

      <style jsx global>
        {globalStyles}
      </style>
    </MediaContextProvider>
  );
};
export default App;
