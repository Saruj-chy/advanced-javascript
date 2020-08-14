const students = [
  { id: 21, name: 'Omur Sanny' },
  { id: 28, name: 'Manna' },
  { id: 18, name: 'Moiyuri' },
  { id: 42, name: 'Dipjol' },
]

const names = students.map(s => s.name);
console.log(names)

const ids = students.map(s => s.id);
console.log(ids)

const bigger = students.filter(s => s.id > 25);
console.log(bigger)