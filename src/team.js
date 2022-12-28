export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj) === false) {
      this.members.add(obj);
      return;
    }
    throw new Error('Персонаж уже существует');
  }

  addAll(...array) {
    array.forEach((player) => this.members.add(player));
  }

  toArray() {
    const listPlayers = [];
    this.members.forEach((player) => listPlayers.push(player));
    return listPlayers;
  }
}
