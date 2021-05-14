export const getData = async ({ url, fetchMethod, text }) => {
  if (fetchMethod === 'get') {
    const res = await fetch(url);
    const getResults = await res.json();
    return getResults;
  }
  //TODO needs body
  if (fetchMethod === 'post') {
    const res = await fetch(url);
    const postResults = await res.json();
    return postResults.body(text);
  }

  //TODO needs body
  if (fetchMethod === 'put') {
    const res = await fetch(url);
    const getResults = await res.json();
    return getResults;
  }

  if (fetchMethod === 'delete') {
    const res = await fetch(url);
    const getResults = await res.json();
    return getResults;
  }
};
