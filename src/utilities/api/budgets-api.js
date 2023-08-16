import sendRequest from "../send-request";
const BASE_URL = '/api/budgets'; // Adjust the URL to match your endpoint

export async function createBudget(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}