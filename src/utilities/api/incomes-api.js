import sendRequest from "../send-request";
const BASE_URL = '/api/incomes'; // Adjust the URL to match your endpoint

export async function createIncome(incomeData) {
  console.log(incomeData, '<---- income data')
  return sendRequest(BASE_URL, 'POST', incomeData);
}

export async function updateIncome(incomeId, incomeData) {
  return sendRequest(`${BASE_URL}/${incomeId}`, 'PUT', incomeData);
}

export async function deleteIncome(incomeId) {
  return sendRequest(`${BASE_URL}/${incomeId}`, 'DELETE');
}

export async function getIncomes() {
  return sendRequest(BASE_URL, 'GET');
}

export async function getIncomeById(incomeId) {
  return sendRequest(`${BASE_URL}/${incomeId}`, 'GET');
}
