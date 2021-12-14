// ============== Queue ============== //

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
        return this.queue[this.frnt];
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
            for(let i=this.frnt; i<this.maxSize; i++){
                console.log(this.queue[i]);
            }
            for(let i=0; i<=this.rear; i++){
                console.log(this.queue[i]);
            }
        }
    }
};

// ============== Stack ============== //

class myStack {
    
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
        return this.stack[this.top-1];
    }
    
    push(item){
        if (this.isFull()){
            return "stack is full";
        }
        this.stack[this.top++] = item;
    }
    
    pop(){
        if (this.isEmpty()){
            return "stack is empty";
        }
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

// ============== Useful functions ============== //

function isOperator(c){
    if((c=='*') || (c=='/') || (c=='-') || (c=='+') || (c=='(') || (c==')')){
        return true;
    }
    else{
        return false;
    }
}

// Function to decide the precedence of operators
function opPrecednce(c) {
    if((c=='*') || (c=='/')){
        return 6;
    }
    else if((c=='+') || (c=='-')){
        return 7;
    }
    else{
        return 100;
    }
}

/* Arithmetic evaluations */
function evaluateExpression(l, r, o){
    if(o=='+')
        return (l+r);
    else if(o=='-')
        return (l-r);
    else if(o=='*')
        return (l*r);
    else
        return (l/r);
}

// ============== Evaluation ============== //

function infixToPostfix(expression) {

    let expr = expression;
    let result = "";
    let op = "";
    let prevSlotOp = 0;

// ============== Infix to postfix conversion ============== //

    expr = expr + ")";
    
    let q1 = new myQueue(expr.length);
    let s1 = new myStack(expr.length);
    let evalStack = new myStack(expr.length);

    // console.log(expr)
    // console.log(expr.length)
    s1.push('(');
    // s1.show();

    if(expr[0]=='+' || expr[0]=='*' || expr[0]=='/') {
        console.log("Expression is Invalid...");
        return;
    }
    else if(expr[0]=='-'){
        q1.enQue(0);
    }

    for(let i=0; i<expr.length; i++){

        op = expr[i];

        if(!isOperator(op)){
            q1.enQue(op);
            prevSlotOp = 0;
        }
        else{
            if(op=='('){
                s1.push(op);
                prevSlotOp = 0;
            }
            else if(op==')'){
                while(s1.topElement()!='('){
                    q1.enQue(s1.topElement());
                    s1.pop();
                }
                s1.pop();
                prevSlotOp = 0;
            }
            else{
                if(prevSlotOp == 1){
                    prevSlotOp = 2;
                    break;
                }
                while(opPrecednce(s1.topElement()) <= opPrecednce(op)){
                    q1.enQue(s1.topElement());
                    s1.pop();
                }

                s1.push(op);
                prevSlotOp = 1;
            }
        }
    }

    if(prevSlotOp == 2) {
        console.log("Invalid because of consecutive operators");
        return;
    }

    console.log("The postfix expression (after converting from infix) is: ");
    q1.show();

    // The expression evaluation begins here

    q1.enQue(')');

    while(q1.frontValue()!=')'){
        op = q1.frontValue();
        q1.deQue();

        if(!isOperator(op)){
            evalStack.push(Number(op));
        }
        else{
            let rv = evalStack.topElement();
            evalStack.pop();
            let lv = evalStack.topElement();
            evalStack.pop();
            evalStack.push(evaluateExpression(lv,rv,op));
        }
    }

    result = evalStack.topElement();
    evalStack.pop();

    console.log("The result of the expression is: " + result);
}


// let exp = "2*6/(4-1)+5*3";
// let exp = "(1+(4+5+2)-3)+(6+8)";
let exp = "-(2+3)+3";
infixToPostfix(exp);
