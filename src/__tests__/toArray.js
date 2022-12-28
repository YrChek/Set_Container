import Character from '../character';
import Team from '../team';

test('тестирование метода toArray', () => {
  const user1 = new Character('Zorro', 'Swordsman');
  const user2 = new Character('Robin Hood', 'Bowman');
  const team = new Team();
  team.addAll(user1, user2);
  const list = team.toArray();
  expect(list).toMatchObject([
    { name: 'Zorro', type: 'Swordsman' },
    { name: 'Robin Hood', type: 'Bowman' },
  ]);
});
