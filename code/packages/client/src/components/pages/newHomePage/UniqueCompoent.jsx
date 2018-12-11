// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @returns
 */
function UniqueCompoent() {
  return (
    <div
      className="rd-parallax rd-parallax-2"
      style={{
        position: 'relative',
        overflow: 'hidden',
        zIndex: 0,
        background: '#a9e7e2 center center',
      }}
    >
      <div
        className="rd-parallax-layer"
        data-offset={0}
        data-speed={0}
        data-type="html"
        data-fade="false"
        data-direction="normal"
        style={{
          transform: 'translate3d(0px, 0px, 0px)',
        }}
      >
        <div className="wrapper it_HWIGGOQNQSPB home-parallax" />
        <div className="item-content">
          <h2>
            We will create <br />
            <span className="small">your unique style!</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

// export component
export { UniqueCompoent };
