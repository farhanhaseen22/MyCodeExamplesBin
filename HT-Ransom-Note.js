    // let magazine = 'ive got a lovely bunch of coconuts'
    // let note = 'ive got some coconuts'
    // // let magazine = 'i need a pair of bags'
    // // let note = 'i need bags'

    // let map = { };
    // let matchStr = true;
    // for ( let i of magazine ) {
    //     map[i] = (map[i] || 0) + 1;
    // }
    // for ( let i of note ) {
    //     map[i] = (map[i] || 0) - 1;
    // }
    // for ( let i in map ) {
    //     if ( map[i] < 0 ) {
    //         matchStr = false;
    //         break;
    //     }
    // }

    // // printing
    // Object.keys(map).forEach(key => {
    //     console.log(key+': '+map[key]);
    // });
    // // printing
    // console.log(matchStr ? 'Yes' : 'No');
    

    let s1 = 'hello';
    let s2 = 'world';

    // let arr = s1.split('');
    // for ( let i of s2 ) {
    //     if(arr.includes(i)){
    //         console.log('Yes');
    //     };
    // }

    var map = {};
    for (var i = 0; i < s1.length; i++) {
        map[s1[i]] = true;
    }
    for (var i = 0; i < s2.length; i++) {
        if (map[s2[i]]) return 'YES';
    }
    return 'NO';