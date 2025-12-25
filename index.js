const _ = require('lodash');

// Sample data
const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
];

// Using lodash to filter and sort the data
const result = _.chain(data)
    .filter(person => person.age > 28)
    .sortBy('name')
    .value();

console.log(result);
/*
Output:
[
  { id: 1, name: 'Alice', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
]
*/  