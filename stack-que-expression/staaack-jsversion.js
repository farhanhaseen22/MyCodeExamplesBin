class myStack {
    
    // let maxSize = 0
    // let top = 0;

    constructor(maxSize = 5, top = 0) {
        this.stack = [];
        this.maxSize = maxSize;
        this.top = top;
    }
    
    isFull(){
        return this.top === this.maxSize;
    }
    
    isEmpty(){
        return this.top === 0;
    }
    
    topElement()
    {
        console.log(this.stack[this.top-1]);
        // return this.stack[this.top-1];
    }
    
    push(item){
        if (this.isFull()){
            return "stack is full";
        }
        this.stack[this.top++] = item;
        // this.top++;
        // console.log("pushed item:- " + item)
    }
    
    pop(){
        if (this.isEmpty()){
            return "stack is empty";
        }
        // this.stack.pop();
        this.top--;
    }
    
    show() {
        if(this.isEmpty())
        {
            return;
        }

        for(let i=this.top-1; i>=0; i--)
        {
            console.log(this.stack[i], " ");
        }
    }
}

let s1 = new myStack(2);
s1.push(1);
s1.push(2);
s1.push(3);
// console.log("stack.length :- ",s1.stack.length);
s1.pop();
s1.push(4);
s1.show();
console.log("=======show=========");
s1.push(5);
s1.pop();
s1.push(6);
s1.topElement();
console.log("Top :- ",s1.top);
// console.log("========topElement========");
s1.show();
console.log("=======show=========");
// s1.push(7);
// s1.push(8);
// s1.push(12);
// s1.push(13);
// s1.show();

// function create_stack(l){
//     maxSize = l;
//     stack = [];
//     return stack;
// }

// function isFull(stack){
//     return stack.length == maxSize;
// }

// function isEmpty(stack){
//     return stack.length == 0;
// }

// function topElement(stack)
// {
//     return stack[top-1];
// }

// function push(stack, item){
//     if (isFull(stack)){
//         return "stack is full";
//     }
//     stack.push(item);
//     top++;
//     // console.log("pushed item:- " + item)
// }

// function pop(stack){
//     if (isEmpty(stack)){
//         return "stack is empty";
//     }
//     stack.pop();
//     top--;
// }
