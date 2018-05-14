// API Module


function handleError(res) {
  console.log(res);
  return res.ok ? res : Promise.reject(res.statusText);
}

function handleContentType(response) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }

    return Promise.reject('Oops, we haven\'t got JSON!');
}

// Abstract Ajax Get function
export function getJSON(query) {
  return window.fetch(query, {
    method: 'GET',
    headers: new Headers({
        'Accept': 'application/json'
    }),
    simple: true
  })
  .then(handleError)
  .then(handleContentType)
  .catch((err) => {
    console.log(err);
  });
}

export default getJSON;
