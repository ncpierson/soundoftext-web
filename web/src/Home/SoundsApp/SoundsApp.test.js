import React from 'react';
import { mount } from 'enzyme';
import SoundsApp from './SoundsApp';
import Sound from './SoundsList/Sound';

it('starts with no sounds', () => {
  const app = mount(<SoundsApp />);

  expect(app.find(Sound).exists()).toBeFalsy();
});

it('creates a sound on form submit', () => {
  const app = mount(<SoundsApp />);

  const input = app.find('textarea');
  input.simulate('change', { target: { value: 'Hello' } });

  const submit = app.find('input[type="submit"]');
  submit.simulate('submit');

  expect(app.find(Sound).length).toEqual(1);
});

it('can create multiple sounds', () => {
  const app = mount(<SoundsApp />);
  const input = app.find('textarea');
  const submit = app.find('input[type="submit"]');

  input.simulate('change', { target: { value: 'Hello' } });
  submit.simulate('submit');

  input.simulate('change', { target: { value: 'World' } });
  submit.simulate('submit');

  expect(app.find(Sound).length).toEqual(2);
});
