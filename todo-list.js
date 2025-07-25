
const todos = [
  { title: "Do homework", done: false },
  { title: "Wash dishes", done: true },
  { title: "Read a book", done: false },
  { title: "Buy groceries", done: true },
  { title: "Practice coding", done: false },
  { title: "Clean the room", done: true }
];


const completedTasks = todos.filter(todo => todo.done === true);


const ongoingTasks = todos.filter(todo => todo.done === false);


console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});


console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
