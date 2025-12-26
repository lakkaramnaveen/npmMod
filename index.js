const _ = require("lodash");

// Sample data
const data = [
  { id: 1, name: "Alice", age: 32 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

// Using lodash to filter and sort the data
const result = _.chain(data)
  .filter((person) => person.age > 28)
  .sortBy("name")
  .value();

console.log(result);
/*
Output:
[
  { id: 1, name: 'Alice', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
]
*/

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

