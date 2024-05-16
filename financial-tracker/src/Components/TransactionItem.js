import React from 'react';

const TransactionItem = ({ title, date, amount }) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      borderBottom: '1px solid #ddd',
    },
    details: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      width: '40px',
      height: '40px',
      marginRight: '15px',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    date: {
      fontSize: '14px',
      color: 'gray',
    },
    amount: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.details}>
        <div style={styles.textContainer}>
          <span style={styles.title}>{title}</span>
          <span style={styles.date}>{date}</span>
        </div>
      </div>
      <span style={styles.amount}>{amount}</span>
    </div>
  );
};

export default TransactionItem;
