import { stringify } from 'querystring';

const baseURL = 'http://localhost:3000';

export function getRequest(resource, params = null, auth = null) {
  const url = params ? `${baseURL}${resource}${stringify(params)}`
    : `${baseURL}${resource}`;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (auth) headers.Authorization = auth;

  return fetch(url, {
    method: 'GET',
    headers,
    timeout: 10000,
  });
}

export function postRequest(resource, body = {}, auth = null) {
  const url = `${baseURL}${resource}`;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (auth) headers.Authorization = auth;


  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    timeout: 10000,
  });
}

export function deleteRequest(resource, params = null, auth = null) {
    const url = params ? `${baseURL}${resource}${stringify(params)}`
    : `${baseURL}${resource}`;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (auth) headers.Authorization = auth;

    return fetch(url, {
      method: 'DELETE',
      headers,
      timeout: 10000,
    });
  }

  export function putRequest(resource, params = null, body = {}, auth = null) {
    const url = params ? `${baseURL}${resource}${stringify(params)}`
    : `${baseURL}${resource}`;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (auth) headers.Authorization = auth;

    return fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
      timeout: 10000,
    });
  }
