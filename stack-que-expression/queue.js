class myQueue{

    constructor(maxSize = 5) {
        this.queue = [];
        this.maxSize = maxSize;
        this.frnt = -1;
        this.rear = -1;
    }

    isEmpty(){
        return ((this.frnt==-1) && (this.rear==-1));
    }

    isFull(){
        return ((this.rear+1)%this.maxSize==this.frnt);
    }

    enQue(item){
        if(this.isFull()){
            console.log("Queue is Full!\n");
            return false;
        }
        else if(this.isEmpty()){
            this.frnt = this.rear = 0;
        }
        else{
            this.rear = (this.rear+1)%this.maxSize;
        }

        this.queue[this.rear] = item;
        return true;
    }

    deQue(){
        if(this.isEmpty()){
            console.log("Queue is already empty!\n");
            return false;
        }
        else if(this.frnt==this.rear){
            this.frnt=this.rear=-1;
        }
        else{
            this.frnt = (this.frnt + 1)%this.maxSize;
        }
        return true;
    }

    frontValue(){
        console.log(this.queue[this.frnt]);
    }

    show(){

        if(this.isEmpty()){
            console.log("Queue is empty\n");
            return;
        }

        if(this.rear>=this.frnt){
            for(let i=this.frnt; i<=this.rear; i++){
                console.log(this.queue[i]);
            }
        }
        else{
            for(let i=0; i<=this.rear; i++){
                console.log(this.queue[i]);
            }
            for(let i=this.frnt; i<this.maxSize; i++){
                console.log(this.queue[i]);
            }
        }
    }
};

let q1 = new myQueue(2);
q1.enQue(1);
q1.enQue(2);
q1.enQue(3);
q1.deQue();
q1.enQue(4);
q1.show();
console.log("=======show=========");
q1.enQue(5);
q1.deQue();
q1.enQue(6);
q1.show();
console.log("=======show=========");
// q1.frontValue();
// console.log("========topElement========");
// q1.enQue(7);
// q1.enQue(8);
// q1.show();
