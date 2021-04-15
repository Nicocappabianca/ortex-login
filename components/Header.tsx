import React, { FC, useEffect, useState } from 'react';

const Header: FC = () => {
  const [price, setPrice] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');
    socket.onopen = (event: any) => {
      if (event.currentTarget.readyState == 1) {
        socket.send(JSON.stringify({ topic: 'subscribe', to: 'EURUSD:CUR' }));
        socket.onmessage = (message) => {
          if (message.data) {
            const messageData = JSON.parse(message.data);
            if (messageData.price && messageData.dt) {
              setPrice(messageData.price);
              setTime(messageData.dt);
            }
          }
        };
      }
    };
  }, []);

  const formatTime = (timestamp: any) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <header className="header">
      <span>EUR / USD : {price ? `$${price}` : ' - - '}</span>
      <span>Last update: {time ? formatTime(time) : ' - - '}</span>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0px;
          width: 100%;
          height: 30px;
          background: rgba(000, 000, 000, 0.8);
          z-index: 2;
          font-size: 14px;

          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      `}</style>
    </header>
  );
};

export default Header;
