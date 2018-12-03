// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @param {*} {
 *   name = 'Joho Doe',
 *   content = "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
 *   title = 'Graphic Designer',
 *   avatar = 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
 * }
 * @returns
 */
const Quote = ({
  name = 'Joho Doe',
  content = "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  title = 'Graphic Designer',
  avatar = 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
}) => {
  return (
    <div className="Quote-quote">
      <div className="Quote-inner">{content}</div>
      <div className="Quote-footer">
        <div className="Quote-description">
          <p>-{name}-</p>
          <p>{title}</p>
        </div>
        <div
          className="Quote-avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      </div>
    </div>
  );
};

// export function
export default Quote;
