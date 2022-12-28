import Character from '../character';
import Team from '../team';

test('тестирование метода addAll', () => {
  const user1 = new Character('Zorro', 'Swordsman');
  const user2 = new Character('Robin Hood', 'Bowman');
  const user3 = new Character('Harry Potter', 'Magician');
  const team = new Team();
  team.addAll(user1, user2, user3, user1);
  expect(team.members.size).toBe(3);
});
