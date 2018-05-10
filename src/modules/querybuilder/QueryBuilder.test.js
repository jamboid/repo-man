import buildGithubAPIQuery from './QueryBuilder';

it('returns a query string', () => {
  expect(buildGithubAPIQuery('username')).toBeTruthy();
});

it('includes the passed username in the query string', () => {
  expect(buildGithubAPIQuery('shadwell')).toContain('shadwell');
});

it('builds the correct query', () => {
  const queryMatch = 'http://api.github.com/users/jamboid/repos';
  expect(buildGithubAPIQuery('jamboid')).toBe(queryMatch);
});
