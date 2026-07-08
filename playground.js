const taskRepository = require("./src/repositories/task.repository");

console.log("--- Testando create ---");
const task1 = taskRepository.create({ title: "Estudar Node.js" });
const task2 = taskRepository.create({ title: "Fazer compras", description: "Comprar leite e pão" });
console.log(task1);
console.log(task2);

console.log("--- Testando findAll ---");
console.log(taskRepository.findAll());

console.log("--- Testando findById ---");
console.log(taskRepository.findById(1));
console.log(taskRepository.findById(999)); // não existe, deve dar undefined

console.log("--- Testando update ---");
const updated = taskRepository.update(1, { completed: true });
console.log(updated);

console.log("--- Testando remove ---");
const removed = taskRepository.remove(2);
console.log("Removido?", removed);
console.log(taskRepository.findAll());