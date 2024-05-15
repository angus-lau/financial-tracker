import credential_handler
import get_expenses
from googleapiclient.discovery import build
import gspread



def create_expenses(date: str, expense: str, amount: str, category: str):
    SPREADSHEET_ID = "1rnYyBf3xr2Y8NCDSPtEJFGWfHBRcup00bumLbctTfkA"

    creds = credential_handler.get_creds()
    client = gspread.authorize(creds)
    workbook = client.open_by_key(SPREADSHEET_ID)
    sheet = workbook.worksheet("Sheet1")
    current_values = get_expenses.get_values()
    next_row = str(len(current_values) + 2)
    sheet.update_acell("A" + next_row, date)
    sheet.update_acell("B" + next_row, expense)
    sheet.update_acell("C" + next_row, amount)
    sheet.update_acell("D" + next_row, category)

