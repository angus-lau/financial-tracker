
# BMO Expense Tracker

The BMO Expense Tracker is a personal financial management tool that allows users to track their expenses. This provides a clear overview on where and how users are spending. 



## Tech Stack

**Client:** Python, FastAPI

**Server:** Javascript, React


## Features

- Expense Tracking
- Filtering based on selected category
- Expense categorization based on historical data 


## Screenshots

![App Screenshot](https://i.imgur.com/0kuxOnJ.png)
![App Screenshot](https://i.imgur.com/rlk8M93.png)


## Deployment

To deploy this project run

```bash
uvicorn main:app

cd financial-tracker

npm run dev
```


## Installation

Install the requirements for financial-tracker by running:

```bash
  pip install -r requirements.txt
```
    
## API Reference

#### Get expenses

```http
  GET /get-expenses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `n/a` | `n/a` | Returns a list of expenses |

#### Get item

```http
  GET /get-expense-by-type
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **Required**. Type of expense |

#### Get current balance

```http
  GET /get-curr-balance
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n/a`      | `n/a` | Return total balance |

#### Get sum of expenses

```http
  GET /get-expense-amount
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n/a`      | `n/a` | Return total expense amount |

#### Get sum of income

```http
  GET /get-income
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n/a`      | `n/a` | Return total income |

#### Post new emails

```http
  POST /refresh
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n/a`      | `n/a` | Resync new emails |

#### Categorize new expenses

```http
  POST /categorize-expense
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n/a`      | `n/a` | Categorize new expenses based on history |

#### Post new expenses

```http
  POST /post-new-expense
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `string` | **Required** Date of the expense e.g 11 Jun 2024 |
| `expense`      | `string` | **Required** Location of expense e.g MCDONALDS |
| `amount`      | `string` | **Required** Amount of expense e.g $12.31 |
| `category`      | `string` | **Required** Category of expense e.g Meal |

#### Delete an expense

```http
  DELETE /delete-expense
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `n/a` | **Required** Date of expense |
| `amount`      | `n/a` | **Required** Amount of expense |









