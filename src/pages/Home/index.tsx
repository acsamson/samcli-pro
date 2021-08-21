import React from 'react';
import styles from './index.less';

function Home() {
  return (
    <div>
      <div className={styles.header}></div>
      <div className={styles.content_1}>
        <div className={styles.search}></div>
      </div>
      <div className={styles.content_2}></div>
    </div>
  );
}

export default Home;
