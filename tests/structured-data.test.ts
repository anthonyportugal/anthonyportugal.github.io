import { test } from 'node:test';
import assert from 'node:assert/strict';
import { structuredData } from '../src/data/structured-data.ts';

// The person's @id and Sanctuary's @id are shared with sanctuary-ds.github.io,
// which declares the same two entities: matching identifiers are what let search
// engines join both sites into one graph instead of reading two strangers.
const PERSON = 'https://anthonyportugal.github.io/#person';
const SANCTUARY = 'https://sanctuary-ds.github.io/#design-system';

const graph = structuredData('Software Engineer & Frontend Architect')['@graph'];
// Read as plain JSON, the way a search engine reads it.
const byType = (type: string) =>
  graph.find((node) => node['@type'] === type) as Record<string, unknown>;

test('the graph uses the schema.org vocabulary', () => {
  assert.equal(structuredData('x')['@context'], 'https://schema.org');
});

test('the person carries the identifier Sanctuary points to', () => {
  const person = byType('Person');
  assert.equal(person['@id'], PERSON);
  assert.equal(person.name, 'Anthony Portugal');
  assert.equal(person.url, 'https://anthonyportugal.github.io');
  assert.equal(person.jobTitle, 'Software Engineer & Frontend Architect');
  assert.deepEqual(person.sameAs, [
    'https://github.com/anthonyportugal',
    'https://www.linkedin.com/in/bruceeanthonyportugalrobles/',
  ]);
});

test('Sanctuary is declared with its own identifier and credits the person', () => {
  const sanctuary = byType('SoftwareSourceCode');
  assert.equal(sanctuary['@id'], SANCTUARY);
  assert.equal(sanctuary.name, 'Sanctuary');
  assert.equal(sanctuary.url, 'https://sanctuary-ds.github.io/');
  assert.deepEqual(sanctuary.author, { '@id': PERSON });
  assert.deepEqual(sanctuary.creator, { '@id': PERSON });
});
