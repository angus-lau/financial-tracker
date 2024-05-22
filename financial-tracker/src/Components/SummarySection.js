import React from 'react';

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
  summary: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
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
