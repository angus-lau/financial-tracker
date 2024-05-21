from fastapi import FastAPI, Path
import credential_handler
import get_expenses
import create_expense
import gmail_reader
import delete_expense
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

credential_handler.get_creds()

@app.get("/get-expenses")
def get_expense():
    return get_expenses.get_values()

@app.get("/get-expense-by-type")
def get_expense_by_type(type: str):
    valid_expense = []
    all_expenses = get_expenses.get_values()
    for external in all_expenses:
        if (external[3].lower()) == type.lower():
            valid_expense.append(external)
            
    return valid_expense

@app.delete("/delete-expense")
def delete_expense(date: str = Path(title="in format of DD-Mon"), amount: int = Path(title="in format of $00.00")):
    i = 2
    for expense in get_expenses.get_values():
        if (expense[0] == date) and (expense[3] == amount):
            cell_range = "Sheet1!A" + str(i) + ":D" + str(i)
            break
        else:
            i += 1
    return delete_expense.delete_expenses(cell_range)

@app.post("/refresh")
async def resync_new_emails():
    current_list = get_expense()
    new_emails =  gmail_reader.fetch_email_data()
    unreceived_emails = []
    for email in new_emails:
        # Loop through all emails and if its not already in the curren list, add it into the unreceived_emails list
        if not (email in current_list):
            unreceived_emails.append(email)
    return create_expense.create_expenses(unreceived_emails[0][0], unreceived_emails[0][1], unreceived_emails[0][2], "UNDEFINED")

@app.post("/post-new-expense")
def post_new_expense(date: str, expense: str, amount: str, category: str):
    return create_expense.create_expenses(date, expense, amount, category)

@app.get("/get-curr-balance")
def get_curr_balanace():
    return get_income() + get_expenditures()

@app.get("/get-expense-amount")
def get_expenditures():
    amount = 0
    expenses = get_expenses.get_values()
    for expense in expenses:
        for index, price in enumerate(expense):
            if index == 2:
                    amount += float(price[1:])
    return amount

@app.get("/get-income")
def get_income():
    expenses = get_expenses.get_values()
    for expense in expenses:
        for index, price in enumerate(expense):
            if index == 2:
                if price[0] == "-":
                    amount += float(price[2:])
    return amount

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)
    

