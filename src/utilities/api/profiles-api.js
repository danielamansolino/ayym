import sendRequest from "../send-request";
const BASE_URL = '/api/profiles';

export async function createProfile(profileData) {
  return sendRequest(BASE_URL, 'POST', profileData);
}

export async function updateProfile(profileData) {
  return sendRequest(BASE_URL, 'PUT', profileData);
}

export async function getProfile() {
  return sendRequest(BASE_URL, 'GET');
}

export async function deleteProfile() {
  return sendRequest(BASE_URL, 'DELETE');
}
