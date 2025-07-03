export class Stack{
    constructor(){
        this.items = [];}

    push(item){
        this.items.push(item);
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return (this.items.lentgh===0);
    }

    size(){
        return this.items.length;
    }
}