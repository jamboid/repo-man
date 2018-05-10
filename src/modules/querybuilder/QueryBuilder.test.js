import buildGithubAPIQuery from './QueryBuilder';

it('returns a query string', () => {
  expect(buildGithubAPIQuery('username')).toBeTruthy();
});

it('builds the correct query', () => {
  const queryMatch = 'http://api.github.com/users/jamboid/repos';
  expect(buildGithubAPIQuery('jamboid')).toBe(queryMatch);
});
