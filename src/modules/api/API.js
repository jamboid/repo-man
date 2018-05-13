// API Module

function handleError(_res) {
  return _res.ok ? _res : Promise.reject(_res.statusText);
}

function handleContentType(response) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }

    return Promise.reject('Oops, we haven\'t got JSON!');
}

// Abstract Ajax Get function
export function get(query) {
  return window.fetch(query, {
    method: 'GET',
    headers: new Headers({
        'Accept': 'application/json'
    })
  })
  .then(handleError)
  .then(this._handleContentType)
  .catch( error => { throw new Error(error) })
}

export default get;
