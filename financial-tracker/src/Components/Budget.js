import React, { useState } from 'react';
import Expense from './Expense';

const categories = [
  { emoji: '♺', label: 'all' },
  { emoji: '🍔', label: 'meal' },
  { emoji: '🍿', label: 'entertainment' },
  { emoji: '🛒', label: 'groceries' },
  { emoji: '🧍🏽‍♂️', label: 'personal' },
  { emoji: '🚗', label: 'vehicle' },
];

const colors = ['#d1cfe2', '#C6E2E9', '#FFDAC1', '#E2F0CB', '#B5EAD6', '#F6EAC2'];

const Budget = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  function handleCategoryClick(category) {
    setSelectedCategory(category.label);
    console.log(category.label);
  }

  return (
    <div>
      <div className="budgets" style={styles.budgets}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              ...styles.budgetItem,
              backgroundColor: colors[index % colors.length], // Apply color based on index
            }}
            onClick={() => handleCategoryClick(category)}
          >
            <div style={styles.emoji}>{category.emoji}</div>
            <div style={styles.label}>{category.label}</div>
          </div>
        ))}
      </div>
      <Expense selectedCategory={selectedCategory} />
    </div>
  );
};

const styles = {
  budgets: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '12vh',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #ddd',
  },
  budgetItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    width: '4vw',
    height: '6vh',
    textAlign: 'center',
    cursor: 'pointer',
  },
  emoji: {
    fontSize: '30px',
  },
  label: {
    marginTop: '1.5vh',
    fontSize: '12px',
    paddingBottom: '20px',
  },
};

export default Budget;