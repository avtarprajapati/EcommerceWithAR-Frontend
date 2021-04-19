import React from 'react';
import styles from './index.module.scss';

function CountDetails(props) {
  const { allDetails } = props;

  return (
    <div className={styles.countdetails}>
      {Object.keys(allDetails).map((item) => (
        <div key={item} className={styles.item}>
          <label>{allDetails[item].label}</label>
          <span>{allDetails[item].count}</span>
        </div>
      ))}
    </div>
  );
}

export default CountDetails;
