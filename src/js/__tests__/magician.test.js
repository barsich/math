import Magician from '../magician';

test('should create correct object instance', () => {
  expect(new Magician('magician')).toBeInstanceOf(Magician);
});

test('should create correct object instance with correct props', () => {
  const expected = {
    name: 'Alex',
    type: 'magician',
    health: 100,
    level: 1,
    _attack: 10,
    defence: 40,
    distance: 1,
    _stoned: false,
  };
  expect(expected).toEqual(new Magician('Alex'));
});
