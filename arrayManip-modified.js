// let queries = [[1,6,3],[4,8,7],[6,9,1],[5,7,5]];


let queries = [[2,6,8],[3,5,7],[1,8,1],[5,9,15]];
let n = 10;
let AddedNums = [];

for (var i = 0; i <= n; i++)
    AddedNums[i] = 0;

for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
        AddedNums[j] = AddedNums[j] + queries[i][2];
    }
}

let maxVal = Math.max(...AddedNums);

// let max = 0;
//     for (let k = 0; k < AddedNums.length; k++) {
//         max = Math.max(max, AddedNums[k]);
//     }

console.log(maxVal);
// console.log(AddedNums);


    // let AddedNums = [];

    // for (var i = 0; i <= n; i++)
    //     AddedNums[i] = 0;

    // for (let i = 0; i < queries.length; i++) {
    //     for (let j = queries[i][0]; j <= queries[i][1]; j++) {
    //         AddedNums[j] = AddedNums[j] + queries[i][2];
    //     }
    // }

    // let max = 0;
    // for (let k = 0; k < AddedNums.length; k++) {
    //     max = Math.max(max, AddedNums[k]);
    // }
    // return max;