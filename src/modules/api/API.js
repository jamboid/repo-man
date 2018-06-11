// API Module
function handleError(res) {
  return res.ok ? res : Promise.reject(res.statusText);
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
  .then(handleContentType)
  .then(processData)
  .catch(error => {
    console.log(error);
  });
}

export default getJSON;
