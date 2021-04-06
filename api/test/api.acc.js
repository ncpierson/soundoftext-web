const test = require('ava');
const util = require('util');
const client = require('./client.js');

const uuidMatcher = /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

const isUUID = (string) => string.match(uuidMatcher);

test('create new sound', async (t) => {
  return client.sound.create().then((response) => {
    t.truthy(response.success);
    t.truthy(isUUID(response.id));
  });
});

test('get sound status', async (t) => {
  const soundId = await client.sound.create().then((res) => res.id);

  return client.sound.show(soundId).then((response) => {
    t.truthy(response.hasOwnProperty('status'));
    t.truthy(response.status == 'Pending' || response.status == 'Done');
  });
});

test('get sound location', async (t) => {
  const soundId = await client.sound.create().then((res) => res.id);

  const expectedLocation = `https://soundoftext.nyc3.digitaloceanspaces.com/${soundId}.mp3`;

  return client.sound.location(soundId).then((response) => {
    t.is(expectedLocation, response);
  });
});
