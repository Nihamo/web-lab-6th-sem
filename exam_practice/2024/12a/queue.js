export class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty())return null;
        return this.items.shift();
    }

    front(){
        if(this.isEmpty())return null;
        return this.items[0];
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0;
    }
}