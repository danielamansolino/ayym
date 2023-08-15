import sendRequest from "../send-request";
const BASE_URL = '/api/accounts'; // Adjust the URL to match your endpoint

export async function createAccount(accountData) {
  return sendRequest(BASE_URL, 'POST', accountData);
}

export async function updateAccount(accountId, accountData) {
  return sendRequest(`${BASE_URL}/${accountId}`, 'PUT', accountData);
}

export async function deleteAccount(accountId) {
  return sendRequest(`${BASE_URL}/${accountId}`, 'DELETE');
}

export async function listAccounts() {
  return sendRequest(BASE_URL, 'GET');
}

export async function getAccount(accountId) {
  return sendRequest(`${BASE_URL}/${accountId}`, 'GET');
}
