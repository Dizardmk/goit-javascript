import users from './users.js';

/*
 * task-01
 */
const getUserNames = users => users.map(user => user.name);

console.log('task-01:', getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/*
 * task-02
 */
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log('task-02:', getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*
 * task-03
 */
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log('task-03:', getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*
 * task-04
 */
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log('task-04:', getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*
 * task-05
 */
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log('task-05:');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

/*
 * task-06
 */
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

console.log('task-06:');
console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*
 * task-07
 */
const calculateTotalBalance = users =>
  users.reduce((acc, user) => acc + user.balance, 0);

console.log('task-07:', calculateTotalBalance(users)); // 20916

/*
 * task-08
 */
const getUsersWithFriend = (users, friendName) =>
  users
    // .filter(user => user.friends.includes(friendName))
    // .filter(user => user.friends.some(friend => friend === friendName))
    .filter(user => user.friends.find(friend => friend === friendName))
    .map(user => user.name);

console.log('task-08:');
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/*
 * task-09
 */
const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);

console.log('task-09:', getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*
 * task-10
 */
const getSortedUniqueSkills = users =>
  users
    .flatMap(user => user.skills)
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();

console.log('task-10:', getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
