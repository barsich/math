import Magician from '../magician';

test('mathcharacter attack value', () => {
  const magician = new Magician('Alex');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = false;
  expect(magician.attack).toBe(90);
  magician.stoned = true;
  expect(magician.attack).toBe(85);
  magician.attack = 150;
  magician.distance = 5;
  magician.stoned = true;
  expect(magician.attack).toBe(80);
});

test('get stoned', () => {
  const magician = new Magician('Alex');
  expect(false).toBe(magician.stoned);
});

test('get attack', () => {
  const magician = new Magician('Alex');
  expect(10).toBe(magician.attack);
});

test('mathcharacter attack value, distance > 10 || < 1', () => {
  const magician = new Magician('Alex');
  magician.distance = 20;
  expect(magician.attack).toBe(0);
  magician.distance = -20;
  expect(magician.attack).toBe(0);
});
