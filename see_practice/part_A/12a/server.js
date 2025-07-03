import {Stack} from "./stack.js";
import { Queue } from "./queue.js";

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("stack after pushing:",stack.items);
console.log("pop:",stack.pop());
console.log("stack size:",stack.size());
console.log("peek:",stack.peek());

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("after enqueueing:",queue.items);
console.log("dequeue:",queue.dequeue());
console.log("front:",queue.front());
console.log("size:",queue.size());
