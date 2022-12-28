import Character from '../character';
import Team from '../team';

test('Тестирование метода add на добавление объекта', () => {
  const user1 = new Character('Zorro', 'Swordsman');
  const team = new Team();
  team.add(user1);
  expect(team.members.has(user1)).toBeTruthy();
});
