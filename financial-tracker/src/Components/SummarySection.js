import React from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';
import SemiCircleProgress from 'react-progressbar-semicircle';

const Summary = ({ availableSpend, totalLimit, spent }) => {
  const remainingSpend = totalLimit - spent;
  const spentPercentage = (spent / totalLimit) * 100;

  return (
    <div style={styles.container}>
      <div style={styles.summary}>
        <h2 style={styles.txt}>Summary</h2>
        <div style={styles.availableSpend}>
            {/* TODO: FIX AVAILABLE SPEND STYLE */}
          <span style={styles.totalLimit}>Available Spend</span>
          <span style={styles.availableSpendAmount}>+${remainingSpend.toFixed(2)}</span>
          <span style={styles.totalLimit}>${totalLimit} Limit</span>
        </div>
      </div>
      <div style={styles.btDiv}>
      <SemiCircleProgress percentage={33} strokeWidth={30} stroke={"orange"}/>
      <p style={styles.p1}>$150.42</p>
      </div>
    </div>
  );
};

const styles = {
    txt: {
        fontSize: '25px',
    },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '20px',
    height: '25vh',
    borderBottom: '1px solid #ddd',
  },
  p1: {
    position: 'absolute',
    top: '30%',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btDiv: {
    display: 'flex',
    position: 'relative',
  },
  summary: {
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'left'
  },
  availableSpend: {
    marginBottom: '20px'
  },
  availableSpendAmount: {
    color: '#28a745',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  totalLimit: {
    display: 'block',
    marginTop: '5px',
    color: '#6c757d'
  },
};

export default Summary;
