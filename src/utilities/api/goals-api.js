import sendRequest from "../send-request";
const BASE_URL = '/api/goals'; // Adjust the URL to match your endpoint

export async function createGoals(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function updateGoals(formId, formData) {
  return sendRequest(`${BASE_URL}/${formId}`, 'PUT', formData);
}

export async function deleteGoals(formId) {
  return sendRequest(`${BASE_URL}/${formId}`, 'DELETE');
}

export async function listGoals() {
  return sendRequest(BASE_URL, 'GET');
}

export async function getGoals(formId) {
  return sendRequest(`${BASE_URL}/${formId}`, 'GET');
}