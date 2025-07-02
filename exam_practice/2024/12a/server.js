import { Stack } from './stack.js';
import { Queue } from './queue.js';

const stack = new Stack();
const queue = new Queue();

stack.push(30);
stack.push(20);
stack.push(10);

console.log('stack size:',stack.size());
console.log('stack peek:',stack.peek());
console.log('stack pop:',stack.pop());
console.log('stack after pop:',stack.items);

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log('queue size:',queue.size());
console.log('queue front:',queue.front());
console.log('queue dequeue:',queue.dequeue());
console.log('queue after dequeue:',queue.items);