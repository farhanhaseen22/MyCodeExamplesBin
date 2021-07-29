let ar = [10,20,20,10,30,10,30,50,30];

let unique = [...new Set(ar)];
// let test=0;

let doneValues = [];
let sockValues = [];
let Obj = {
    socks: [],
    pairs: [],
    singles: []
};

for(let i = 0; i < unique.length; i++){
    // test++;
    let curr = null;
    for(let j = 0; j < ar.length; j++){
        if( doneValues.includes(ar[j]) != true){
            if(curr == null){
                sockValues.push(ar[j]);
                curr = ar[j];
            }
            else if(curr == ar[j]){
                sockValues.push(ar[j]);
            }
        }
    }

    doneValues.push(unique[i]);

    Obj.socks.push(curr);
    let num = parseFloat(sockValues.length)/2;
    let trunc_num=Math.trunc(num);
    Obj.pairs.push(trunc_num);
    if(trunc_num!=num)
        Obj.singles.push(1);
    else
        Obj.singles.push(0);

    sockValues.length = 0;
}

let tots=0;
Obj.pairs.forEach(element => {
    console.log(element);
    tots = tots+element;
});

console.log(tots);

// return test;


// let num = 6/2;
// let trunc_num=Math.trunc(num);

// if(trunc_num!=num)
// {
//     console.log(num+'ok');
// }
// console.log(trunc_num);
// console.log(typeof(trunc_num));


// var ar = [1, 4, 5, 6];

// console.log(ar);
// ar.length = 0;
// console.log(ar);
// ar.length = 2;
// console.log(ar);


    // let unique = [...new Set(ar)];
    // let tots=0;
        
    // let doneValues = [];
    // let sockValues = [];
    
    // for(let i = 0; i < unique.length; i++){
    //     let curr = null;
    //     for(let j = 0; j < ar.length; j++){
    //         if( doneValues.includes(ar[j]) != true){
    //             if(curr == null){
    //                 sockValues.push(ar[j]);
    //                 curr = ar[j];
    //             }
    //             else if(curr == ar[j]){
    //                 sockValues.push(ar[j]);
    //             }
    //         }
    //     }
    //     let num = parseFloat(sockValues.length)/2;
    //     let trunc_num=Math.trunc(num);
    //     tots = tots+trunc_num;

    //     doneValues.push(unique[i]);
    //     sockValues.length = 0;
    // }

    // return tots;

