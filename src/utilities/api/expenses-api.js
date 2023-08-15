import sendRequest from "../send-request";
const BASE_URL = '/api/expenses'; // Adjust the URL to match your endpoint

export async function createExpense(expenseData) {
  return sendRequest(BASE_URL, 'POST', expenseData);
}

export async function updateExpense(expenseId, expenseData) {
  return sendRequest(`${BASE_URL}/${expenseId}`, 'PUT', expenseData);
}

export async function deleteExpense(expenseId) {
  return sendRequest(`${BASE_URL}/${expenseId}`, 'DELETE');
}

export async function listExpenses() {
  return sendRequest(BASE_URL, 'GET');
}

export async function getExpense(expenseId) {
  return sendRequest(`${BASE_URL}/${expenseId}`, 'GET');
}
