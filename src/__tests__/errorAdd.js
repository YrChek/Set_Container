import Character from '../character';
import Team from '../team';

test('Тестирование метода add на ошибку', () => {
  expect(() => {
    const user1 = new Character('Zorro', 'Swordsman');
    const team = new Team();
    team.add(user1);
    team.add(user1);
  }).toThrow();
});
