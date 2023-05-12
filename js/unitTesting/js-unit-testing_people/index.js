export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((dict) => `${dict.firstName} ${dict.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((dict) => `${dict.firstName} (${dict.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((dict) => dict.age == age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((dict) => dict.age > age)
    .map((dict) => `${dict.firstName} ${dict.lastName}`);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((dict) => dict.lastName == lastName);
}

export function findPersonById(people, id) {
  return people.find((dict) => dict.id == id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((dict) => dict.age > age);
}

export function getFullNamesSortedByAge(people) {
  return people
    .slice()
    .sort((a, b) => a.age - b.age)
    .map((person) => person.firstName);
}
