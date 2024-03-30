import React from 'react';
//@ts-ignore
import styles from './animation.css'; // Assuming this is the path to your CSS module

const MedCircle = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <g id="Med-Circle">
        <g id="Group 1">
          <circle id="ellipse1" cx="110" cy="110" r="110" className={styles.ellipse1}/>
          <circle id="ellipse2" cx="110" cy="110" r="109" className={styles.ellipse2}/>
        </g>
      </g>
    </svg>
  );
};

export default MedCircle;
