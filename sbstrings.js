// let s = 'abaabaaba';


// let s = 'aba';
let s = 'abcacA';
let n=10;
let res = s.match(/a/gi).length;
let mul = n/s.length;
res = Math.round(res*mul);
console.log("This S: "+res);

    // for (let i = 0; i < s.length; i++) {
    //     if(s.charAt(i)=='a'){
    //         res++;
    //     }
    // }

// mul = Math.ceil(mul);
// res = res*mul;



// while (s.length<=n) {
//     s = s.concat(s);
// }

// s = s.substr(0, n);

// console.log(s.match(/a/gi).length);



    // let s2=s;
    // while (s.length<=n) {
    //     s = s.concat(s2);
    // }
    // s = s.substr(0, n);
    // return s.match(/a/gi).length;