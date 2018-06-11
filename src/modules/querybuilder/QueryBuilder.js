// QueryBuilder Module
const githubQueryBasePrefix = 'https://api.github.com/users/';
const githubQueryBaseSuffix = '/repos';

// Abstract Ajax Get function
export function buildGithubAPIQuery(username) {
  const queryString = githubQueryBasePrefix + username + githubQueryBaseSuffix;
  return queryString;
}

export default buildGithubAPIQuery;
