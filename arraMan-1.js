let queries = [[2,6,8],[3,5,7],[1,8,1],[5,9,15]];
let n = 10;
let EffectedNums = [];

for (var i = 1; i <= n; i++)
    EffectedNums[i] = 0;

for (let i = 0; i < queries.length; i++){
    EffectedNums[queries[i][0]] += queries[i][2];
    let x = queries[i][1] + 1;
    EffectedNums[x] -= queries[i][2];
}

let totalSoFar = 0;
let maxVal = 0;

EffectedNums.forEach(currVal => {
    if(currVal>=0){
        totalSoFar += currVal;
        // maxVal = Math.max(maxVal, totalSoFar);
        if(maxVal < totalSoFar){
            maxVal = totalSoFar;
        }
    }
});

console.log(maxVal);
EffectedNums.forEach((currVal,i) => {
    console.log(i+": "+currVal);
});


// [1,8,7, 0,15,-7,-8,0,-1,-15]

// def arrayManipulation(n, queries):
//     c = Counter()
//     for a,b,k in queries:
//         c[a]  +=k
//         c[b+1]-=k
//     arrSum = 0
//     maxSum = 0
//     for i in sorted(c)[:-1]:
//         arrSum+= c[i]
//         maxSum = max(maxSum,arrSum)
//     return maxSum