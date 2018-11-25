import React from 'react';

/* import { Spin } from "antd"; */

const LoadingCompoment = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      >
        {' '}
        Đang load ...
        {/*<Spin
          style={{
            margin: 0
          }}
        />*/}
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    console.log(error);
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};
export default LoadingCompoment;
