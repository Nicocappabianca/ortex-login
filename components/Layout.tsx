import React, { FC } from 'react';
import { Header } from '@/components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <main className="layout__main">{children}</main>

      <style jsx>{`
        .layout {
          width: 100%;
          height: 100%;
          min-height: 100vh;

          @supports (-webkit-touch-callout: none) {
            min-height: -webkit-fill-available;
          }
        }

        .layout {
          &__main {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default Layout;
