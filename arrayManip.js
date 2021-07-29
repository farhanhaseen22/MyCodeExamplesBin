// let queries = [[1,6,3],[4,8,7],[6,9,1],[5,7,5]];


let queries = [[2,6,8],[3,5,7],[1,8,1],[5,9,15]];
let maxVal = queries[0][2];
let AddedNums = [];
if(queries[1][0]<=queries[0][1]){
    maxVal = maxVal + queries[1][2];
    let A = queries[0][1];
    let B = queries[1][0];
    for (let i = B; i <= A; i++) {
        AddedNums.push(i);
    }
}

for (let i = 2; i < queries.length; i++) {
    // AddedNums = [...new Set(AddedNums)];
    let temp=queries[i][0];
    if(temp<=queries[i-1][1]){
        if(AddedNums.includes(temp)){
            maxVal = maxVal + queries[i][2];
            let el = AddedNums.length-1;
            let A = AddedNums[el];
            let B = queries[i][0];
            for (let i = B; i <= A; i++) {
                AddedNums.push(i);
            }
        }
        else if(temp<AddedNums[0]){
            maxVal = maxVal + queries[i][2];
        }
    }
}

console.log(maxVal);
console.log(AddedNums);

// console.log("Before-"+maxVal);
//             maxVal = maxVal + queries[i][2];
//             console.log("After-"+maxVal);



//  1 2 3  4  5 6 7 8 9 10
// [0,8,8, 8, 8,8,0,0,0, 0]
// [0,0,15,15,15,0,0,0,0, 0]
// [1,1,16,16,16,1,1,1,0, 0]