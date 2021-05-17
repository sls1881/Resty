import { method } from 'lodash';

export const getData = async ({ url, fetchMethod, text }) => {
  if (fetchMethod === 'GET') {
    const res = await fetch(url);
    const getResults = await res.json();
    return getResults;
  }

  if (
    fetchMethod === 'POST' ||
    fetchMethod === 'PUT' ||
    fetchMethod === 'DELETE'
  ) {
    const res = await fetch(url, {
      method: fetchMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: text,
    });
    const postResults = await res.json();
    return postResults;
  }
};
