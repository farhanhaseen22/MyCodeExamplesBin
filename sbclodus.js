let c = [0,0,0,0,1,0];
let curr=0;
let noOfJumps=0;

while (curr < (c.length-1)) {
    
    if(c[curr+2] !== 1){
        noOfJumps++;
        console.log("Jump made at: "+curr);
        curr = curr+2;
        console.log("To the cloud: "+curr);
    }
    else{
        noOfJumps++;
        console.log("Jump made at: "+curr);
        curr = curr+1;
        console.log("To the node: "+curr);
    }
}

console.log(noOfJumps);
