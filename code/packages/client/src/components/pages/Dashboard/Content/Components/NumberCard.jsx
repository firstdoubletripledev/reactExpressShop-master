import { Card, Icon } from 'antd';
import React from 'react';
import CountUp from 'react-countup';

function NumberCard({ icon, color, title, number, countUp }) {
  return (
    <Card
      bordered={false}
      bodyStyle={{
        padding: '16px',
        marginBottom: '24px',
        cursor: 'pointer',
      }}
    >
      <Icon
        style={{
          color,
          fontSize: '54px',
          float: 'left',
        }}
        type={icon}
      />
      <div
        style={{
          width: '100%',
          paddingLeft: '78px',
        }}
      >
        <p
          style={{
            lineHeight: '16px',
            fontSize: '16px',
            marginBottom: '8px',
            height: '16px',
          }}
        >
          {title || 'No Title'}
        </p>
        <p
          style={{
            lineHeight: '32px',
            fontSize: '24px',
            height: '32px',
          }}
        >
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
          />
        </p>
      </div>
    </Card>
  );
}

export default NumberCard;
