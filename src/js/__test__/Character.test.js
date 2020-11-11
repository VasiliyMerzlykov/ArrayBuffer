import Character from '../Character';

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 1;

  expect(character.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 4;

  expect(character.attack).toBe(70);
});

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 1;
  character.stoned = true;

  expect(character.attack).toBe(100);
});

test('attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 0;
  character.stoned = true;

  expect(character.attack).toBe(100);
});

test('attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 2;
  character.stoned = true;

  expect(character.attack).toBe(85);
});
