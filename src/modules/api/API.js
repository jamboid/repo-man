// API Module
function handleError(response) {
  return response.ok ? response : Promise.reject(response.statusText);
}

function handleStatus(response) {
  console.log(response);

  if(response.status === 404) {
    return Promise.reject('404');
  } else {
    return response;
  }
}

function handleContentType(response) {
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }

  return Promise.reject('Oops, we haven\'t got JSON!');
}

function processData(rawData) {
  console.log(rawData);
  const processedData = [];

  for (var i = 0; i < rawData.length; i++) {
    const rawRepo = rawData[i];
    const processedRepo = {};

    console.log(rawRepo);

    processedRepo.id = rawRepo.id;
    processedRepo.name = rawRepo.name;
    processedRepo.description = rawRepo.description;
    processedRepo.url = rawRepo.html_url;
    processedRepo.watchers = rawRepo.watchers_count;
    processedRepo.stars = rawRepo.stargazers_count;

    processedData.push(processedRepo);
  }

  return processedData
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
  //.then(handleStatus)
  .then(handleContentType)
  .then(processData)
  .catch(error => {
    console.log(error);
  });
}

export default getJSON;
